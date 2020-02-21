import chalk from 'chalk';
import Listr from 'listr';
import paths from '../config/paths';
import { frameworks as cssFrameworks } from '../config/frameworks/css';
import { frameworks as jsFrameworks } from '../config/frameworks/js';
import prompts from './prompts';
import tasks from './tasks';
import resolveDependencies from './resolve-dependencies';
import checkPathIntegrity from '../utils/path-integrity';
import parseTemplate from './parse-template';

/**
 * Create project based off of user input
 * @param {Object<string, boolean>} args 
 */
export default async function(args) {
    let options = await prompts(args);
    options = {
        ...options,
        targetDirectory: process.cwd()
    };

    // check path to common template
    await checkPathIntegrity(paths.templates.common);

    const templates = [
        { dir: paths.templates.common },
        await parseTemplate(cssFrameworks, options.cssFramework, 'css'),
        await parseTemplate(jsFrameworks, options.jsFramework, 'js')
    ];

    const dependencies = resolveDependencies(templates);

    const queue = new Listr(tasks(options, templates, dependencies));
    await queue.run();

    console.log('%s Project ready', chalk.green.bold('DONE'));
}
