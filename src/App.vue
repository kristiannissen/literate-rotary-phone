/**
 * @file app.vue
 */
<template><b>Hello {{ msg }}</b></template>
<script>
export default {
        created() {
                console.log("Hello Kitty")
            },
            data() {
                    return { msg: 'Kitty'}
                }
    }
</script>
