import fs from 'fs-extra';

export default async function(templates, targetDirectory) {
    const copyFiles = new Promise(async (resolve, reject) => {
        for(let i = 0; i < templates.length; i++) {
            if(templates[i].dir) {
                await fs.copy(templates[i].dir, targetDirectory).catch(err => reject(err));
            }
        }
        resolve();
    });
    return copyFiles.catch(err => {
        console.log(err);
        process.exit(1);
    });
}
