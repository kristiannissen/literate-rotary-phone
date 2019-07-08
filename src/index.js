import Vue from "vue";
import ActionButton from "./components/ActionButton";
import GroceryList from "./components/GroceryList";
import BrewTitle from "./components/BrewTitle";
import Snackbar from "./components/Snackbar";
import Modal from "./components/Modal";
/*new Vue({
   render: h => h(AppComponent)
 }).$mount('#app')
 */

// Vue.component('appcomponent', AppComponent)
Vue.component("brewtitle", BrewTitle);
Vue.component("actionbutton", ActionButton);
Vue.component("grocerylist", GroceryList);
Vue.component("snackbar", Snackbar);
Vue.component("modal", Modal);

const app = new Vue({
  el: "#app"
});
