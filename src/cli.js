import parseArgs from './config/args';
import prompts from './actions/prompts';

export async function cli(args) {
    let options = parseArgs(args);
    options = await prompts(options);
    console.log(options);
}