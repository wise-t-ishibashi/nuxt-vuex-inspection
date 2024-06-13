const Vuex = require('vuex')
import Vue from 'vue';

console.log("=====plugins/vuex.js=====")
console.log('The Vuex Module', Vuex, 'the install method', Vuex.install) // install is undefined

Vue.use(Vuex);
