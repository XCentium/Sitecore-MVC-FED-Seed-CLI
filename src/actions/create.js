import chalk from 'chalk';
import Listr from 'listr';
import paths from '../config/paths';
import { frameworks as cssFrameworks } from '../config/frameworks/css';
import prompts from './prompts';
import copy from './copy';
import git from './git';
import checkPathIntegrity from '../utils/path-integrity';
import { projectInstall } from 'pkg-install';

import injectDependency from './inject-dependency';
import parseTemplate from './parse-template';

export default async function(args) {
    let options = await prompts(args);
    options = {
        ...options,
        targetDirectory: process.cwd()
    };

    // check path to common template
    await checkPathIntegrity(paths.templates.common);

    const cssTemplate = await parseTemplate(cssFrameworks, options.cssFramework, 'css');

    const tasks = new Listr([
        {
            title: 'Copy common project files',
            task: () => copy(paths.templates.common, options.targetDirectory)
        },
        {
            title: 'Copy CSS framework project files',
            task: () => copy(cssTemplate.dir, options.targetDirectory),
            skip: () => !cssTemplate.dir
        },
        {
            title: 'Inject CSS framework dependencies',
            task: () => injectDependency(cssTemplate.dependencies),
            skip: () => !cssTemplate.dir
        },
        {
            title: 'Initialize git',
            task: () => git(options.targetDirectory),
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