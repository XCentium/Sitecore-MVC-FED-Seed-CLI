import chalk from 'chalk';
import Listr from 'listr';
import paths from '../config/env';
import { frameworks as cssFrameworks } from '../config/frameworks/css';
import copyFiles from './copy-files';
import initGit from './initialize-git';
import checkPathIntegrity from '../utils/path-integrity';

export default async function(options) {
    options = {
        ...options,
        targetDirectory: process.cwd()
    };

    // check path to common template
    await checkPathIntegrity(paths.templates.common);

    // parse css framework location and check directory integrity. 
    // if integrity test fails, it is assumed no framework is selected
    const cssTemplate = cssFrameworks.find(option => option.title === options.cssFramework);
    const cssTemplateDir = cssTemplate && paths.templates.css[cssTemplate.template] ? paths.templates.css[cssTemplate.template] : false;
    await checkPathIntegrity(cssTemplateDir, () => console.log(chalk.green.bold('No CSS framework selected')));

    const tasks = new Listr([
        {
            title: 'Copying common project files',
            task: () => copyFiles(paths.templates.common, options.targetDirectory)
        },
        {
            title: 'Copying CSS framework project files',
            task: () => copyFiles(cssTemplateDir, options.targetDirectory),
            skip: () => !cssTemplateDir
        },
        {
            title: 'Initializing git',
            task: () => initGit(options.targetDirectory),
            enabled: () => options.git
        }
    ]);

    await tasks.run();
    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true;
}