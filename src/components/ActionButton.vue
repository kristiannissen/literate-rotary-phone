<template>
  <div
    v-bind:class="[
      'mdl-action-button',
      active ? 'show-actions' : 'hide-actions'
    ]"
  >
    <button
      v-on:click="toggleActions"
      class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
    >
      <i class="material-icons">add</i>
    </button>
    <ul>
      <li>
        <button class="mdl-button mdl-js-button">
          <i class="material-icons">create</i>
        </button>
      </li>
      <li>
        <button class="mdl-button mdl-js-button" v-on:click="saveAction">
          <i class="material-icons">save</i>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  mounted() {},
  created() {},
  methods: {
    toggleActions() {
      if (this.active === false) this.active = true;
      else this.active = false;
    },
    saveAction() {
      this.$root.$emit("message", {
        payload: "Kitty",
        cb: function(params) {
          console.log(params);
        }
      });
    }
  }
};
</script>
