import path from 'path';

const root = path.resolve(__dirname, '../../');

export default {
    templates: {
        common: path.resolve(root, './templates/common'),
        css: {
            'bootstrap-4': path.resolve(root, './templates/css/bootstrap-4'),
            'tailwindcss': path.resolve(root, './templates/css/tailwindcss')
        }
    }
};