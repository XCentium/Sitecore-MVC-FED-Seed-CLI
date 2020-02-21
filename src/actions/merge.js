import fs from 'fs-extra';
import readline from 'readline';
import * as settings from '../config/merge';

/**
 * Read file line by line to map sections to a region object
 * @param {string} path Path to indicate which file we are parsing
 * @returns {Object<string,string>}
 */
async function parseFile(path) {
    return new Promise((resolve, reject) => {
        /** @type {Object<string,string>} */
        let fileRegions = {};

        try {
            // create a readline instance so we can parse the file content
            const rl = readline.createInterface({
                input: fs.createReadStream(path),
                output: process.stdout,
                terminal: false
            });

            let temp = '';
            let tempRegion = {
                name: '',
                inner: '' 
            };

            rl.on('line', line => {
                // if we're inside of a defined region
                if(tempRegion.name) {
                    if(line.includes(settings.end)) {
                        // when we hit the region end, assign region values to map and clear temp var
                        for (const name in settings.regions) {
                            if(settings.regions[name] === tempRegion.name) {
                                fileRegions[tempRegion.name] = tempRegion.inner;
                                break;
                            }
                        }
                        tempRegion.name = '';
                        tempRegion.inner = '';
                    } else {
                        tempRegion.inner += `${line}\n`;
                    }
                } else {
                    if(line.includes(settings.start)) {
                        // if this is a region start, interpolate region name from @param style syntax
                        let name = line.substring(
                            line.indexOf(settings.namePrefix) + 1,
                            line.indexOf('*/')
                        );
                        tempRegion.name = name.trim();
                    } else {
                        if(line) {
                            // keep track of lines outside of a region to add later
                            temp += `${line}\n`
                        }
                    }
                }
            }).on('close', () => {
                // append all lines not categorized by a region into the Middle region
                fileRegions.Middle += temp;
                resolve(fileRegions);
            });
        } catch(err) {
            // if file stream fails, return empty region map
            console.log(err);
            reject(fileRegions)
        }
    });
}

/**
 * Merge files using "smart" region comments
 * @param {string} dest String to indicate the path of the existing file
 * @param {string} src String to indicate the path of the file to merge into the existing file
 * @returns {Promise<string>}
 */
async function merge(dest, src) {
    const prevFile = await parseFile(dest);
    const nextFile = await parseFile(src);
    let newFile = '';
    Object.values(settings.regions).forEach(region => {
        newFile += `${settings.start} ${settings.namePrefix}${region} */\n`;
        if(prevFile[region]) {
            newFile += `${prevFile[region]}`;
        }
        if(nextFile[region]) {
            newFile += `${nextFile[region]}`;
        }
        newFile += `${settings.end}\n\n`;
    });
    return newFile;
}

/**
 * Clean up "smart" region comments in mergeable files
 * @param {string} path Path of the file that will be cleaned
 */
export async function cleanup(path) {
    const cleanupFile = new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', async (err, data) => {
            let lines = data.split('\n');
            const cleaned = lines
                .filter(line => !line.includes(settings.start) && !line.includes(settings.end))
                .reduce((acc, line) => `${acc}\n${line}`);
            
            await fs.writeFile(path, cleaned).catch(err => reject(err));
            resolve();
        });
    });

    return cleanupFile.catch(err => {
        console.log(err);
    })
}

/**
 * Check if files should be merged, then merge them
 * @param {string} dest String to indicate the path of the existing file
 * @param {string} src String to indicate the path of the file to merge into the existing file
 * @returns {Promise<boolean>}
 */
export default async function(src, dest) {
    let shouldMerge = false;
    // first check if this file is a mergeable file
    for(let i = 0; i < settings.mergeable.length; i++) {
        if(src.includes(settings.mergeable[i])) {
            shouldMerge = true;
            break;
        }
    }
    
    if(shouldMerge) {
        const exists = await fs.pathExists(dest);
        if(exists) {
            // if this is a mergeable file and an existing file exists, merge the existing file and queued file
            const newFile = await merge(dest, src);
            await fs.writeFile(dest, newFile).catch(err => {
                console.log(err);
                process.exit(1);
            });
            return false;
        }
    }
    return true;
}
