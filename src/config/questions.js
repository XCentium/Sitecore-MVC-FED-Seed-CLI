import * as cssFrameworks from './frameworks/css';
import * as jsFrameworks from './frameworks/js';

/**
 * Prompt to select CSS framework
 * @type {Object<string,string> | Object<string,Array<string>>}
 */
const css = {
    type: 'list',
    name: 'cssFramework',
    message: 'Choose a CSS Framework',
    choices: cssFrameworks.frameworks.map(option => option.title),
    default: cssFrameworks.defaultFramework
};

/**
 * Prompt to select JS framework
 * @type {Object<string,string> | Object<string,Array<string>>}
 */
const js = {
    type: 'list',
    name: 'jsFramework',
    message: 'Choose a Javascript Framework',
    choices: jsFrameworks.frameworks.map(option => option.title),
    default: jsFrameworks.defaultFramework
};

/**
 * Prompt to initialize git
 * @type {Object<string,string> | Object<string,boolean>}
 */
const git = {
    type: 'confirm',
    name: 'git',
    message: 'Would you like to initialize this as a git repository?',
    default: false
};

export { 
    css,
    js,
    git
};
