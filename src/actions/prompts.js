import inquirer from 'inquirer';
import multichoice from '../utils/inquirer-multichoice';
import * as questions from '../config/questions';
import { defaultFramework as defaultCssFramework } from '../config/frameworks/css';
import { defaultFramework as defaultJavascriptFramework } from '../config/frameworks/javascript';

export default async function(options) {
    if(options.skipPrompts) {
        return {
            ...options,
            cssFramework: defaultCssFramework,
            javascriptFramework: defaultJavascriptFramework
        }
    }

    let questionQueue = [];

    if(!options.cssFramework) {
        questionQueue.push(multichoice(questions.css));
    }

    if(!options.javascriptFramework) {
        questionQueue.push(multichoice(questions.javascript));
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