<template>
    <div>
        <ul class="mdl-list">
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                    Maris Otter
                </span>
                <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
        <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
      </label>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
            return {
                items: []
            }
        },
  mounted() {
    console.log("Hello List");
  },
  created() {
    console.log("Hello List");
  }
};
</script>
