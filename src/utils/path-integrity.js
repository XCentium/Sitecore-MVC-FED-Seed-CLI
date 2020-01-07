import fs from 'fs-extra';
import chalk from 'chalk';

export default async function(directory, cb) {
    const exists = await fs.pathExists(directory);
    if(!exists) {
        if(!cb || typeof cb !== 'function') {
            console.log(err);
            console.error('%s There was an issue copying project files. Please try again', chalk.red.bold('ERROR'));
            process.exit(1);
        } else {
            console.log(cb);
            cb();
        }
    }
}