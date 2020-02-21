import arg from 'arg';

/**
 * Convert command line arguments into parseable object
 * @param {Array<string>} rawArgs Array of raw arguments passed in from the command line
 * @return {Object<string, string>|Object<string, Object<string, boolean>>}
 */
export default function parseArgs(rawArgs) {
    /** @type {(Object<string, boolean>|Object<string, Array<string>)} */
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
