import ncp from 'ncp';
import { promisify } from 'util';

const copy = promisify(ncp);

export default async function(templateDirectory, targetDirectory, clobber = false) {
    return copy(templateDirectory, targetDirectory, { clobber }).catch(err => console.log(err));
}