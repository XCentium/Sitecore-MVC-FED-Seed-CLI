export function preprocessBeforeCreate() {
    getKeys();
}

function getKeys() {
    const keyElements = document.querySelectorAll('[key]');

    [...keyElements].forEach(element => {
        element.setAttribute('data-key', element.getAttribute('key'));
    });
    const templateElements = document.querySelectorAll('template');
    [...templateElements].forEach(element => {
        let content;

        // TODO: Still not working in ie11
        // This just prevents error from being thrown
        if (element.content) {
            content = element.content;
        } else {
            content = element.firstElementChild;
        }
        const subKeyElements = content.querySelectorAll('[key]');
        [...subKeyElements].forEach(element => {
            element.setAttribute('data-key', element.getAttribute('key'));
        });
    });
}

export function preprocessMounted() {
    persistKeys();
    overridePaste();
}

function persistKeys() {
    const keyElements = document.querySelectorAll('[data-key]');

    [...keyElements].forEach(element => {
        element.setAttribute('key', element.getAttribute('data-key'));
        element.removeAttribute('data-key');
    });
}

function overridePaste() {
    // Experience Editor strip HTML on single line text fields
    const stElements = document.querySelectorAll('[scfieldtype="single-line text"]');
    [...stElements].forEach(element => {
        element.addEventListener('paste', function (e) {
            e.preventDefault();
            var text = '';
            if (e.clipboardData || e.originalEvent.clipboardData) {
                text = (e.originalEvent || e).clipboardData.getData('text/plain');
            } else if (window.clipboardData) {
                text = window.clipboardData.getData('Text');
            }
            if (document.queryCommandSupported('insertText')) {
                document.execCommand('insertText', false, text);
            } else {
                document.execCommand('paste', false, text);
            }
        });
    });
}
