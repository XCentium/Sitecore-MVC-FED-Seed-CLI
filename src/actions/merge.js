import fs from 'fs-extra';
import mergeable from '../config/mergeable';
import smartMerge from './smart-merge';

export default async function(src, dest) {
    let merge = false;
    // first check if this file is a mergeable file
    for(let i = 0; i < mergeable.length; i++) {
        if(src.includes(mergeable[i])) {
            merge = true;
        }
    }
    
    if(merge) {
        const exists = await fs.pathExists(dest);
        if(exists) {
            // if this is a mergeable file and an existing file exists, merge the existing file and queued file
            const newFile = await smartMerge(dest, src);
            await fs.writeFile(dest, newFile).catch(err => {
                console.log(err);
                process.exit(1);
            });
            return false;
        }
    }
    return true;
}
