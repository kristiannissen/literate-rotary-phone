/**
 * @file index.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.component("app", App)

const app = new Vue({
    el: '#app'
})
