const start = '/** #region';
const end = '/** #endregion */';
const nameDlm = '@';

const regions = {
    Top: '',
    Middle: '',
    Bottom: ''
};

const mergeable = [
    '\\source\\js\\index.js'
];

export {
    start,
    end,
    nameDlm,
    regions,
    mergeable
};
