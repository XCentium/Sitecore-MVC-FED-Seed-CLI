import fs from 'fs-extra';
import { mergeable } from '../config/merge';
import merge, { cleanup } from './merge';

/**
 * Copy template files to initialized directory
 * @param {Array<Object<string,string> | Object<string,Object<string,string>>>} templates Array of templates to be copied over to new project directory
 * @param {string} targetDirectory String indicating which directory the project will be copied to
 */
export default async function(templates, targetDirectory) {
    const copyFiles = new Promise(async (resolve, reject) => {
        // loop through templates and copy files if dir propery exists (for loop so that we can run async functions)
        for(let i = 0; i < templates.length; i++) {
            if(templates[i].dir) {
                await fs.copy(templates[i].dir, targetDirectory, 
                    { 
                        filter: await merge // check and merge file if it's defined as a mergeable file
                    }
                ).catch(err => reject(err));
            }
        }
        for(let i = 0; i < mergeable.length; i++) {
            await cleanup(targetDirectory + mergeable[i]);
        }
        resolve();
    });
    return copyFiles.catch(err => {
        console.log(err);
        process.exit(1);
    });
}
