export default function(templates) {
    let dependencies = {};
    templates.forEach(template => {
        if(template.dependencies) {
            Object.assign(dependencies, template.dependencies);
        }
    });
    return Object.entries(dependencies).length !== 0 ? dependencies : null;
}
