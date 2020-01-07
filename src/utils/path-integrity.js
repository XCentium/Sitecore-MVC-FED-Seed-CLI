export default function(directory, cb) {
    try {
        await fs.pathExists(directory);
    } catch(err) {
        if(!cb && typeof cb !== 'function') {
            console.log(err);
            console.error('%s There was an issue copying project files. Please try again', chalk.red.bold('ERROR'));
            process.exit(1);
        } else {
            cb();
        }
    }
}