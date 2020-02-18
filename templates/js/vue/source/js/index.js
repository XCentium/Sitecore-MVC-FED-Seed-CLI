/*
 * #region :TOP
 */

import Vue from 'vue';

//EE JS Helpers (needed to prevent conflicts with Vue and Experience Editor scripts)
import { preprocessBeforeCreate, preprocessMounted } from './utils/preprocess-ee';

/*
 * #endregion
 */

/*
 * #region :BOTTOM
 */

new Vue({
    el: '#App',
    beforeCreate() {
        preprocessBeforeCreate();
    },
    mounted() {
        preprocessMounted();
    }
});

/*
 * #endregion
 */