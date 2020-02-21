/** @type {boolean} */
const isWindows = /^win/.test(process.platform);

/**
 * Workaround for inquirer multichoice on Windows
 * Source: https://gist.github.com/geddski/c42feb364f3c671d22b6390d82b8af8f
 * @param {Object<string,string> | Object<string,Array<string>>} questions 
 * @returns {Object<string,string> | Object<string,Array<string>>}
 */
export default function(questions) {
    if(!isWindows) {
        return questions;
    } else {
        questions.type = 'rawlist';
        return questions;
    }
}
