import chalk from 'chalk';
import Listr from 'listr';
import paths from '../config/paths';
import { frameworks as cssFrameworks } from '../config/frameworks/css';
import { frameworks as jsFrameworks } from '../config/frameworks/js';
import prompts from './prompts';
import tasks from './tasks';
import checkPathIntegrity from '../utils/path-integrity';
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
    const jsTemplate =  await parseTemplate(jsFrameworks, options.jsFramework, 'js');

    const queue = new Listr(tasks(options, { cssTemplate, jsTemplate }));
    await queue.run();

    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true;
}