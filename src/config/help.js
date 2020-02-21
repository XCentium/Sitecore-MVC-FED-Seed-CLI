/**
 * Help text to display for each CLI command
 * @type {Object<string, Array<Object<string, string> | Object<string, Array<string>>>}
 */
const help = {
    cli: [
        {
            heading: 'Usage: xc-cli <command> [options]',
            lines: []
        },
        {
            heading: 'Options:',
            lines: [
                '-v, --version   output the version number',
                '-h, --help      output usage information'
            ]
        },
        {
            heading: 'Commands:',
            lines: [
                'init            generate a new project in current directory',
                'help [cmd]      display help for [cmd]'
            ]
        }
    ],
    init: [
        {
            heading: 'Usage: xc-cli init [options]',
            lines: []
        },
        {
            heading: 'Options:',
            lines: [
                '-s, --simple     skip prompts and generate project with no frameworks selected',
                '-g, --git        initialize project as a Git repository',
                '-i, --install    automatically install Node dependencies'
            ]
        }
    ]
};

export default help;
