import parseArgs from './config/args';
import prompts from './actions/prompts';
import createProject from './actions/create-project';

export async function cli(args) {
    let options = parseArgs(args);
    options = await prompts(options);
    await createProject(options);
}