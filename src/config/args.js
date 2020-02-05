import arg from 'arg';

export default function parseArgs(rawArgs) {
    const args = arg(
        {
            '--simple': Boolean,
            '--git': Boolean,
            '--install': Boolean,
            '--version': Boolean,
            '-s': '--simple',
            '-g': '--git',
            '-i': '--install',
            '-v': '--version'
        },
        {
            argv: rawArgs.slice(1)
        }
    );
    return {
        command: args['_'][1],
        options: {
            skipPrompts: args['--simple'] || false,
            git: args['--git'] || false,
            runInstall: args['--install'] || false,
            version: args['--version'] || false
        }
    }
}
