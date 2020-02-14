import paths from '../config/paths';
import copy from './copy';
import git from './git';
import { projectInstall } from 'pkg-install';
import injectDependency from './inject-dependency';

export default function(options, templates, dependencies) {
    return [
        {
            title: 'Copy common project files',
            task: () => copy(paths.templates.common, options.targetDirectory)
        },
        {
            title: 'Copy CSS framework project files',
            task: () => copy(templates.cssTemplate.dir, options.targetDirectory),
            skip: () => !templates.cssTemplate.dir
        },
        {
            title: 'Copy JS framework project files',
            task: () => copy(templates.jsTemplate.dir, options.targetDirectory),
            skip: () => !templates.jsTemplate.dir
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