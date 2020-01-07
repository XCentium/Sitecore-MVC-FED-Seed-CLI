import fs from 'fs';
import path from 'path';
import url from 'url';
import chalk from 'chalk';
import Listr from 'listr';
import { promisify } from 'util';
import { frameworks as cssFrameworks } from '../config/frameworks/css';

const access = promisify(fs.access);
const currentFileUrl = url.fileURLToPath(import.meta.url);

export default async function(options) {
    options = {
        ...options,
        targetDirectory: process.cwd()
    };

    let cssTemplateDir = '';
    const cssTemplate = cssFrameworks.find(option => option.title === options.cssFramework);
    try {
        cssTemplateDir = path.resolve(
            currentFileUrl,
            '../../templates/css',
            cssTemplate.template
        )
        await access(cssTemplateDir, fs.constants.R_OK);
    } catch(err) {
        console.log(chalk.green.bold('No CSS framework selected'));
    }

    const tasks = new Listr([]);

    await tasks.run();
    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true;
}