import fs from 'fs-extra';

export default async function(templateDirectory, targetDirectory) {
    return fs.copy(templateDirectory, targetDirectory).catch(err => {
        console.log(err);
        process.exit(1);
    });
}