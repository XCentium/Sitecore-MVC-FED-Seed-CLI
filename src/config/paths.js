import path from 'path';
import { frameworks as cssFrameworks } from './frameworks/css';
import { frameworks as javascriptFrameworks } from './frameworks//javascript';

const root = path.resolve(__dirname, '../../');

const cssPaths = {};
cssFrameworks.forEach(framework => {
    if(framework.template) {
        cssPaths[framework.template] = path.resolve(root, 'templates/css', framework.template);
    }
});

const javascriptPaths = {};
javascriptFrameworks.forEach(framework => {
    if(framework.template) {
        javascriptPaths[framework.template] = path.resolve(root, 'templates/javascript', framework.template);
    }
});

export default {
    templates: {
        common: path.resolve(root, './templates/common'),
        css: cssPaths,
        javascript: javascriptPaths
    }
};