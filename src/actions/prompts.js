import inquirer from 'inquirer';
import multichoice from '../utils/inquirer-multichoice';
import * as questions from '../config/questions';
import { defaultFramework as defaultCssFramework } from '../config/frameworks/css';

export default async function(options) {
    if(options.skipPrompts) {
        return {
            ...options,
            cssFramework: defaultCssFramework
        }
    }

    let questionQueue = [];

    if(!options.cssFramework) {
        questionQueue.push(multichoice(questions.css));
    }

    if(!options.git) {
        questionQueue.push(questions.git);
    }

    const answers = await inquirer.prompt(questionQueue);
    return {
        ...options,
        cssFramework: options.cssFramework || answers.cssFramework
    }
}