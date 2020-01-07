/**
 * Workaround for inquirer multichoice on Windows
 * Source: https://gist.github.com/geddski/c42feb364f3c671d22b6390d82b8af8f
 */
const isWindows = /^win/.test(process.platform);

export default function(questions) {
    if(!isWindows) {
        return questions;
    } else {
        questions.type = 'rawlist';
        return questions;
    }
}