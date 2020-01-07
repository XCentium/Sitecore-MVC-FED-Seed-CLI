import fs from 'fs-extra';
import path from 'path';
import url from 'url';
import chalk from 'chalk';
import Listr from 'listr';
import { frameworks as cssFrameworks } from '../config/frameworks/css';
import copyFiles from './copy-files';
import initGit from './initialize-git';

const currentFileUrl = url.fileURLToPath(import.meta.url);

export default async function(options) {
    options = {
        ...options,
        targetDirectory: process.cwd()
    };

    const commonTemplateDir = path.resolve(
        currentFileUrl,
        '../../../templates/common'
    );

    try {
        await fs.pathExists(commonTemplateDir);
    } catch(err) {
        console.log(err);
        console.error('%s There was an issue copying project files. Please try again', chalk.red.bold('ERROR'));
        process.exit(1);
    }

    let cssTemplateDir = '';
    const cssTemplate = cssFrameworks.find(option => option.title === options.cssFramework);
    try {
        cssTemplateDir = path.resolve(
            currentFileUrl,
            '../../../templates/css',
            cssTemplate.template
        )
        await fs.pathExists(cssTemplateDir);
    } catch(err) {
        console.log(chalk.green.bold('No CSS framework selected'));
    }

    const tasks = new Listr([
        {
            title: 'Copying common project files',
            task: () => copyFiles(commonTemplateDir, options.targetDirectory)
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