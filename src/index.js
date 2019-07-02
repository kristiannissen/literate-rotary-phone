import Vue from 'vue'
import AppComponent from './AppComponent.vue'

/*new Vue({
   render: h => h(AppComponent)
 }).$mount('#app')
 */

Vue.component('appcomponent', AppComponent)

const app = new Vue({
    el: '#app'
})
