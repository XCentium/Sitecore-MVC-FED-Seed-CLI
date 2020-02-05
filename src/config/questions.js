import * as cssFrameworks from './frameworks/css';
import * as javascriptFrameworks from './frameworks/javascript';

const css = {
    type: 'list',
    name: 'cssFramework',
    message: 'Choose a CSS Framework',
    choices: cssFrameworks.frameworks.map(option => option.title),
    default: cssFrameworks.defaultFramework
};

const javascript = {
    type: 'list',
    name: 'javascriptFramework',
    message: 'Choose a Javascript Framework',
    choices: javascriptFrameworks.frameworks.map(option => option.title),
    default: javascriptFrameworks.defaultFramework
};

const git = {
    type: 'confirm',
    name: 'git',
    message: 'Would you like to initialize this as a git repository?',
    default: false
};

export { 
    css,
    javascript,
    git
}