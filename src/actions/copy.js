import fs from 'fs-extra';
import merge from './merge';
import mergeable from '../config/mergeable';
import { cleanup } from './smart-merge';

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
