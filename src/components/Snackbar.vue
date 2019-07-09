<template>
  <div
    v-bind:class="[
      'mdl-js-snackbar',
      'mdl-snackbar',
      active ? 'mdl-snackbar--active' : ''
    ]"
  >
    <div class="mdl-snackbar__text">here</div>
    <button class="mdl-snackbar__action"></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  created() {
    console.log("snackbar created");
    this.$root.$on("message", function(payload) {
      console.log("hello snackbar", payload);
      payload.cb("Hello Pussy");
    });
  },
  mounted() {}
};
</script>
