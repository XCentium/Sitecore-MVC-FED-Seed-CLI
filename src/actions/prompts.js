import inquirer from 'inquirer';
import multichoice from '../utils/inquirer-multichoice';
import * as questions from '../config/questions';
import { defaultFramework as defaultCssFramework } from '../config/frameworks/css';
import { defaultFramework as defaultJsFramework } from '../config/frameworks/js';

export default async function(options) {
    if(options.skipPrompts) {
        return {
            ...options,
            cssFramework: defaultCssFramework,
            jsFramework: defaultJsFramework
        }
    }

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

    const answers = await inquirer.prompt(questionQueue);
    return {
        ...options,
        cssFramework: options.cssFramework || answers.cssFramework,
        git: options.git || answers.git
    }
}