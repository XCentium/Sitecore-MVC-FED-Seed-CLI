/**
 * Configurable JS frameworks
 * @type {Array<Object<string,string>|Object<string,Object<string,string>>>}
 */
const frameworks = [
    {
        title: 'None'
    },
    {
        title: 'Vue',
        template: 'vue',
        dependencies: {
            "vue": "^2.6.11"
        }
    }
];

/** @type {string} */
const defaultFramework = 'None';

export { 
    frameworks,
    defaultFramework
};
