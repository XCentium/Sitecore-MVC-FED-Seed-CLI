import chalk from 'chalk';
import Listr from 'listr';
import paths from '../config/paths';
import { frameworks as cssFrameworks } from '../config/frameworks/css';
import copyFiles from './copy-files';
import initGit from './initialize-git';
import checkPathIntegrity from '../utils/path-integrity';
import { projectInstall } from 'pkg-install';

import injectDependency from './inject-dependency';

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
            title: 'Copy common project files',
            task: () => copyFiles(paths.templates.common, options.targetDirectory)
        },
        {
            title: 'Copy CSS framework project files',
            task: () => copyFiles(cssTemplateDir, options.targetDirectory),
            skip: () => !cssTemplateDir
        },
        {
            title: 'Inject CSS framework dependencies',
            task: () => injectDependency(cssTemplate.dependencies),
            skip: () => !cssTemplateDir
        },
        {
            title: 'Initialize git',
            task: () => initGit(options.targetDirectory),
            enabled: () => options.git
        },
        {
            title: 'Install dependencies',
            task: () => projectInstall({ cwd: options.targetDirectory }),
            skip: () => !options.runInstall ? 'Pass --install to automatically install dependencies': undefined
        }
    ]);

    await tasks.run();
    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true;
}