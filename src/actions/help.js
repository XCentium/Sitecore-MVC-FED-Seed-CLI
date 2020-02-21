import help from '../config/help';

/**
 * Display help information
 * @param {?string} command String to indicate which command's help information we are showing
 */
export default function(command = 'cli') {
    help[command].forEach(item => {
        console.log(item.heading);
        item.lines.forEach(line => console.log(` ${line}`));
        console.log();
    });
}
