export default function() {
    const help = `
    Usage: xc-cli <command> [options]
    
    Options:
      -v, --version   output the version number
      -h, --help      output usage information

    Commands:
      init            generate a new project in current directory
      help [cmd]      display help for [cmd]
    `;
    console.log(help);
}

export function init() {
    const help = `
    Usage: xc-cli init [options]

    Options:
      -s, --simple     skip prompts and generate with no frameworks selected
      -g, --git        initialize project as a Git repository
      -i, --install    automatically install Node dependencies
    `;
    console.log(help);
}