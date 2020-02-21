import chalk from 'chalk';
import paths from '../config/paths';
import checkPathIntegrity from '../utils/path-integrity';

/**
 * Parse template location
 * @param {Array<Object<string,string> | Object<string,Object<string,string>>>} frameworks 
 * @param {string} selected 
 * @param {?string} type 
 * @returns {Array<Object<string,string> | Object<string,Object<string,string>>>}
 */
export default async function(frameworks, selected, type = 'common') {
    // parse template location and check directory integrity. 
    // if integrity test fails, it is assumed no framework is selected
    const template = frameworks.find(option => option.title === selected);

    /** @type {?string} */
    const templateDir = template && paths.templates[type][template.template] ? paths.templates[type][template.template] : null;

    if(templateDir) {
        await checkPathIntegrity(templateDir, () => console.log(chalk.green.bold('No framework selected')));
    }

    return {
        ...template,
        dir: templateDir
    };
}
