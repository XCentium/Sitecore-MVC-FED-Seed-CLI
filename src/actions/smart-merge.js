import * as settings from '../config/smart-merge';

export default function(prev, next) {
    console.log(settings);
    return `${prev}\n${next}`;
}
