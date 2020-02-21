/**
 * Return cli version
 */
export default async function() {
    console.log(`CLI version ${require('../../package').version}`);
}
