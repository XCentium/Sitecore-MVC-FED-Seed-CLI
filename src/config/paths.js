import path from 'path';
import { frameworks as cssFrameworks } from './frameworks/css';

const root = path.resolve(__dirname, '../../');

const cssPaths = {};
cssFrameworks.forEach(framework => {
    if(framework.template) {
        cssPaths[framework.template] = path.resolve(root, 'templates/css', framework.template);
    }
});

export default {
    templates: {
        common: path.resolve(root, './templates/common'),
        css: cssPaths
    }
};