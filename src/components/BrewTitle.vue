<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: "Brew Title"
    };
  },
  created() {
    this.$root.$on("HelloKitty", function() {
      console.log("hello doush");
    });
  }
};
</script>
