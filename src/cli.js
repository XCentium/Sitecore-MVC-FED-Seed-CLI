import parseArgs from './config/args';

export async function cli(args) {
    const cl = parseArgs(args);
    let cmd = cl.command;

    if(cl.options.version) {
        cmd = 'version';
    }

    // actions loaded w/ dynamic imports to improve cli performance
    switch(cmd) {
        case 'init':
            const options = await (await import('./actions/prompts')).default(cl.options);
            await (await import('./actions/create-project')).default(options);
            break;
        case 'version':
            (await import('./actions/version')).default();
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`);
    }
    process.exit();
}
