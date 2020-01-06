import * as cssFrameworks from './frameworks/css';

const css = {
    type: 'list',
    name: 'cssFramework',
    message: 'Please choose a CSS Framework',
    choices: cssFrameworks.options.map(option => option.title),
    default: cssFrameworks.defaultOption
}

export { 
    css
}