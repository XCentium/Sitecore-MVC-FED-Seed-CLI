import arg from 'arg';

export default function parseArgs(rawArgs) {
    const args = arg(
        {
            '--simple': Boolean,
            '--git': Boolean,
            '--install': Boolean,
            '--version': Boolean,
            '--help': Boolean,
            '-s': '--simple',
            '-g': '--git',
            '-i': '--install',
            '-v': '--version',
            '-h': '--help'
        },
        {
            argv: rawArgs.slice(1)
        }
    );
    return {
        command: args['_'],
        options: {
            skipPrompts: args['--simple'] || false,
            git: args['--git'] || false,
            runInstall: args['--install'] || false,
            version: args['--version'] || false,
            help: args['--help'] || false
        }
    }
}
