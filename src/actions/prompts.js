import multichoice from '../utils/inquirer-multichoice';
import * as questions from '../config/questions';
import { defaultOption as defaultCssFramework } from '../config/frameworks/css';
import inquirer from 'inquirer';

export default async function(options) {
    if(options.skipPrompts) {
        return {
            ...options,
            cssFramework: defaultCssFramework
        }
    }

    let questionQueue = [];

    if(!options.cssFramework) {
        questionQueue.push(
            multichoice(questions.css)
        )
    }

    const answers = await inquirer.prompt(questionQueue);
    return {
        ...options,
        cssFramework: options.cssFramework || answers.cssFramework
    }
}