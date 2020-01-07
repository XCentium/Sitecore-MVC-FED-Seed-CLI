const frameworks = [
    {
        title: 'None'
    },
    {
        title: 'Bootstrap 3',
        template: 'bootstrap-3',
        dependencies: {
            "bootstrap": "^3.4.1",
            "bootstrap-sass": "^3.4.1"
        }
    },
    {
        title: 'Bootstrap 4',
        template: 'bootstrap-4',
        dependencies: {
            "bootstrap": "^4.4.1",
            "jquery": "^3.4.1",
		    "popper.js": "^1.16.0"
        }
    },
    {
        title: 'Tailwind CSS',
        template: 'tailwindcss',
        dependencies: {
            "tailwindcss": "^1.1.4"
        }
    }
]

const defaultFramework = 'None';

export { 
    frameworks, 
    defaultFramework 
}