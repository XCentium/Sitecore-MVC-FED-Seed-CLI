import parseArgs from './config/args';

export async function cli(args) {
    const cl = parseArgs(args);
    let cmd = cl.command[1];

    if(cl.options.version) {
        cmd = 'version';
    }

    if(cl.options.help || !cmd) {
        cmd = 'help';
    }

    // actions loaded w/ dynamic imports to improve cli performance
    switch(cmd) {
        case 'init':
            await (await import('./actions/create')).default(cl.options);
            break;
        case 'version':
            await (await import('./actions/version')).default();
            break;
        case 'help':
            (await import('./actions/help')).default(cl.command[2]);
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`);
    }
    process.exit();
}
