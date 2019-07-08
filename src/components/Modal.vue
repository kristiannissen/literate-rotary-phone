<template>
    <div>Hello Kitty</div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  }
};
</script>
