import paths from '../config/paths';
import checkPathIntegrity from '../utils/path-integrity';

export default async function(frameworks, selected, type = 'common') {
    // parse framework location and check directory integrity. 
    // if integrity test fails, it is assumed no framework is selected
    const template = frameworks.find(option => option.title === selected);
    const templateDir = template && paths.templates[type][template.template] ? paths.templates[type][template.template] : false;
    await checkPathIntegrity(templateDir, () => console.log(chalk.green.bold('No framework selected')));

    return {
        ...template,
        dir: templateDir
    };
}