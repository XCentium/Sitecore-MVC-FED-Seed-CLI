import help from '../config/help';

/**
 * Display help information
 * @param {?string} command 
 */
export default function(command = 'cli') {
    help[command].forEach(item => {
        console.log(item.heading);
        item.lines.forEach(line => console.log(` ${line}`));
        console.log();
    });
}
