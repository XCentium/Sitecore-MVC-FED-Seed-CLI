/**
 * Merge dependencies across frameworks into one object
 * @param {Array<Object<string,string> | Object<string,Object<string,string>>>} templates Array of templates that will be used with the new project
 * @return {Object<string,string> | null}
 */
export default function(templates) {
    let dependencies = {};
    templates.forEach(template => {
        if(template.dependencies) {
            Object.assign(dependencies, template.dependencies);
        }
    });
    return Object.entries(dependencies).length !== 0 ? dependencies : null;
}
