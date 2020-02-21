import inquirer from 'inquirer';
import multichoice from '../utils/inquirer-multichoice';
import * as questions from '../config/questions';
import { defaultFramework as defaultCssFramework } from '../config/frameworks/css';
import { defaultFramework as defaultJsFramework } from '../config/frameworks/js';

/**
 * Generate prompts and parse response from user
 * @param {Object<string, boolean>} options
 * @return {Object<string, boolean> | Object<string, string>}
 */
export default async function(options) {
    if(options.skipPrompts) {
        return {
            ...options,
            cssFramework: defaultCssFramework,
            jsFramework: defaultJsFramework
        }
    }

    /** @type {Array<Object>} */
    let questionQueue = [];

    if(!options.cssFramework) {
        questionQueue.push(multichoice(questions.css));
    }

    if(!options.jsFramework) {
        questionQueue.push(multichoice(questions.js));
    }

    if(!options.git) {
        questionQueue.push(questions.git);
    }

    /** @type {Object<string,string> | Object<string,boolean>} */
    const answers = await inquirer.prompt(questionQueue);
    return {
        ...options,
        cssFramework: options.cssFramework || answers.cssFramework,
        jsFramework: options.jsFramework || answers.jsFramework,
        git: options.git || answers.git
    }
}
