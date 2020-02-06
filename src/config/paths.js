import path from 'path';
import { frameworks as cssFrameworks } from './frameworks/css';
import { frameworks as jsFrameworks } from './frameworks/js';

const root = path.resolve(__dirname, '../../');

const cssPaths = {};
cssFrameworks.forEach(framework => {
    if(framework.template) {
        cssPaths[framework.template] = path.resolve(root, 'templates/css', framework.template);
    }
});

const jsPaths = {};
jsFrameworks.forEach(framework => {
    if(framework.template) {
        jsPaths[framework.template] = path.resolve(root, 'templates/js', framework.template);
    }
});

export default {
    templates: {
        common: path.resolve(root, './templates/common'),
        css: cssPaths,
        js: jsPaths
    }
};