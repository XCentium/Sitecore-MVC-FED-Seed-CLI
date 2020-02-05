const help = {
    default: [
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
                '-s, --simple     skip prompts and generate with no frameworks selected',
                '-g, --git        initialize project as a Git repository',
                '-i, --install    automatically install Node dependencies'
            ]
        }
    ]
};

const display = arr => {
    arr.forEach(item => {
        console.log(item.heading);
        item.lines.forEach(line => console.log(` ${line}`));
        console.log();
    });
};

export default display.bind(this, help.default);

export const init = display.bind(this, help.init);