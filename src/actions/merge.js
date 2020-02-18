import fs from 'fs-extra';
import mergeable from '../config/mergeable';

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
            const prevFile = await fs.readFile(dest, 'utf8');
            const nextFile = await fs.readFile(src, 'utf8');
            await fs.writeFile(dest, `${prevFile}\n${nextFile}`).catch(err => {
                console.log(err);
                process.exit(1);
            })
            return false;
        }
    }
    return true;
}
