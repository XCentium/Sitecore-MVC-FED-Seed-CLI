import * as cssFrameworks from './frameworks/css';

const css = {
    type: 'list',
    name: 'cssFramework',
    message: 'Please choose a CSS Framework',
    choices: cssFrameworks.frameworks.map(option => option.title),
    default: cssFrameworks.defaultFramework
}

const git = {
    type: 'confirm',
    name: 'git',
    message: 'Would you like to initialize this as a git repository?',
    default: false
}

export { 
    css,
    git
}