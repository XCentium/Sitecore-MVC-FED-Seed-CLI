import execa from 'execa';

export default async function(directory) {
    const result = await execa('git', ['init'], {
        cwd: directory
    });

    if(result.failed) {
        return Promise.reject(new Error('Failed to initialize git'));
    }

    return;
}