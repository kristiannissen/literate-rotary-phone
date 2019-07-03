<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h4>
        Yeasts
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">keyboard_arrow_down</i>
        </button>
      </h4>
    </div>
    <ul class="mdl-list">
      <li
        class="mdl-list__item mdl-list__item--three-line"
        v-for="item in yeastList"
      >
        <span class="mdl-list__item-primary-content">
          <span>{{ item.name }}</span>
          <span class="mdl-list__item-text-body"> </span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <label
            class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
            v-bind:for="item.id"
          >
            <input
              type="checkbox"
              v-bind:id="item.id"
              v-bind:value="item.name"
              class="mdl-checkbox__input"
            />
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
      name: "Art Brew vol 3",
      yeasts: [
        {
          name: "Imperial B63 Monastic"
        },
        {
          name: "Imperial W15 Suburban Brett"
        }
      ],
      fermentables: [
        {
          type: "grain",
          name: "Pilsner Malt",
          amount: 5
        },
        {
          type: "grain",
          name: "Vienna",
          amount: 1
        },
        {
          type: "grain",
          name: "Munich Malt",
          amount: 0.5
        },
        {
          type: "grain",
          name: "Cara Crystal",
          amount: 0.5
        },
        {
          type: "extract",
          name: "Dark Brown Sugar",
          amount: 0.35
        }
      ],
      hops: [
        {
          name: "Sorachi Ace",
          amount: 0.023
        },
        {
          name: "Amarillo",
          amount: 0.05
        }
      ]
    };
  },
  mounted() {
    console.log("Hello List");
  },
  created() {
    console.log("Hello List");
  },
  computed: {
    yeastList: function() {
      return this.yeasts.map(function(item) {
        return {
          name: item.name,
          id: item.name.toLowerCase().replace(/\W/g, "_")
        };
      });
    }
  }
};
</script>
