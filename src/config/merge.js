/**
 * Defines the start of a region
 * @type {string}
 */
const start = '/** #region';

/**
 * Defines the end of a region
 * @type {string} 
 */
const end = '/** #endregion */';

/**
 * Defines prefix character for the region name
 * @type {string}
 */
const namePrefix = '@';

/**
 * Enum for region values
 * @type {Object<string, string>}
 */
const regions = {
    top: 'Top',
    middle: 'Middle',
    bottom: 'Bottom'
};

/**
 * Array of files that should utilize "smart" comment merging
 * @type {Array<string>}
 */
const mergeable = [
    '\\source\\js\\index.js'
];

export {
    start,
    end,
    namePrefix,
    regions,
    mergeable
};
