import * as cssFrameworks from './frameworks/css';
import * as jsFrameworks from './frameworks/js';

const css = {
    type: 'list',
    name: 'cssFramework',
    message: 'Choose a CSS Framework',
    choices: cssFrameworks.frameworks.map(option => option.title),
    default: cssFrameworks.defaultFramework
};

const js = {
    type: 'list',
    name: 'jsFramework',
    message: 'Choose a Javascript Framework',
    choices: jsFrameworks.frameworks.map(option => option.title),
    default: jsFrameworks.defaultFramework
};

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
