import arg from 'arg';

export default function parseArgs(rawArgs) {
    const args = arg(
        {
            '--simple': Boolean,
            '--git': Boolean,
            '--install': Boolean,
            '-s': '--simple',
            '-g': '--git',
            '-i': '--install'
        },
        {
            argv: rawArgs.slice(1)
        }
    );
    return {
        skipPrompts: args['--simple'] || false,
        git: args['--git'] || false,
        runInstall: args['--install'] || false
    }
}
