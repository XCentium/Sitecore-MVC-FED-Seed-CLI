export default async function() {
    const packageConfig = require('../../package.json');
    console.log(`CLI version ${packageConfig.version}`);
}
