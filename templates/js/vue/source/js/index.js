import Vue from 'vue';

//EE JS Helpers (needed to prevent conflicts with Vue and Experience Editor scripts)
import { preprocessBeforeCreate, preprocessMounted } from './utils/preprocess-ee';

console.log('init');

//$ CAN BE USED IN ANYWHERE TO REFERENCE AN EXTERNAL INSTANCE OF JQUERY

//UNCOMMENT THIS IF YOU WANT TO USE JQUERY AS A DEPENDENCY FROM NODE_MODULES (won't be accessible on the global scope & will require installation 'npm install jquery')
// import $ from 'jquery';

new Vue({
    el: '#App',
    beforeCreate() {
        preprocessBeforeCreate();
    },
    mounted() {
        preprocessMounted();
    }
});
