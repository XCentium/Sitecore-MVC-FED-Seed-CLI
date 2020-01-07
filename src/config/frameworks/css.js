const frameworks = [
    {
        title: 'None'
    },
    {
        title: 'Bootstrap 4',
        template: 'bootstrap-4',
        dependencies: {
            "bootstrap": "^4.4.1"
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