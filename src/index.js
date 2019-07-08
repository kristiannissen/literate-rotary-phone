import Vue from "vue";
import AppComponent from "./AppComponent";
import ActionButton from "./components/ActionButton";
import GroceryList from "./components/GroceryList";
import BrewTitle from "./components/BrewTitle";
/*new Vue({
   render: h => h(AppComponent)
 }).$mount('#app')
 */

// Vue.component('appcomponent', AppComponent)
Vue.component("brew-title", BrewTitle);
Vue.component("actionbutton", ActionButton);
Vue.component("grocery-list", GroceryList);

const app = new Vue({
  el: "#app"
});
