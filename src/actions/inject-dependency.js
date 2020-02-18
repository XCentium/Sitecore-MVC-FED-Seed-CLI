import path from 'path';
import writeJsonFile from 'write-json-file';
import chalk from 'chalk';

export default async function(dependencies) {
    const packageConfig = require(path.resolve('.', './package.json'));
    packageConfig.dependencies = Object.assign({}, packageConfig.dependencies, dependencies);
    try {
        await writeJsonFile('package.json', packageConfig);
    } catch(err) {
        console.log(err);
        console.error('%s There was an issue injecting dependency. Please try again or add dependency manually using npm', chalk.red.bold('ERROR'));
    }
}
