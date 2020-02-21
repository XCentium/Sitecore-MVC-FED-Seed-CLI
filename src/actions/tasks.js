import copy from './copy';
import git from './git';
import { projectInstall } from 'pkg-install';
import injectDependency from './inject-dependency';

/**
 * Define task pipeline to create project
 * @param {Object<string, boolean> | Object<string, string>} options Object of options the user has selected so far
 * @param {Array<Object<string,string> | Object<string,Object<string,string>>>} templates Array of templates that will be used with the new project
 * @param {Object<string,string>=} dependencies Abject of dependencies to be injected into the new project
 * @returns {Array<Object<string,string> | Object<string, Function>>}
 */
export default function(options, templates, dependencies) {
    return [
        {
            title: 'Copy project files',
            task: () => copy(templates, options.targetDirectory)
        },
        {
            title: 'Inject framework dependencies',
            task: () => injectDependency(dependencies),
            skip: () => !dependencies
        },
        {
            title: 'Initialize git',
            task: () => git(options.targetDirectory),
            enabled: () => options.git
        },
        {
            title: 'Install dependencies',
            task: () => projectInstall({ cwd: options.targetDirectory }),
            skip: () => !options.runInstall ? 'Pass --install to automatically install dependencies': undefined
        }
    ]
}
