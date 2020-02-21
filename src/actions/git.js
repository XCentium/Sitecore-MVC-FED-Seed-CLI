import execa from 'execa';

/**
 * Execute git initialization command
 * @param {string} directory String indicating which directory the git initialization command should run 
 */
export default async function(directory) {
    const result = await execa('git', ['init'], {
        cwd: directory
    });

    if(result.failed) {
        return Promise.reject(new Error('Failed to initialize git'));
    }

    return;
}
