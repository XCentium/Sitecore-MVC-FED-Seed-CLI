import ncp from 'ncp';
import { promisify } from 'util';

const copy = promisify(ncp);

export default async function(templateDirectory, targetDirectory) {
    return copy(templateDirectory, targetDirectory, { clobber: false });
}