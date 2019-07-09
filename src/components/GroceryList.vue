<template>
  <div class="grocery-list">
    <ul class="mdl-list">
      <li class="mdl-list__item">
        <span class="mdl-list__item-primary-content">Yeast</span>
      </li>
      <li
        class="mdl-list__item mdl-list__item--three-line"
        v-for="item in yeastList"
      >
        <span class="mdl-list__item-primary-content">
          <span>{{ item.name }}</span>
          <span class="mdl-list__item-text-body">
            <a href="" v-for="sub in item.substitutes">{{ sub }}</a>
          </span>
        </span>
        <span class="mdl-list__item-secondary-action">
          <label
            class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
            v-bind:for="item.id"
          >
            <input
              type="checkbox"
              class="mdl-checkbox__input"
              v-bind:value="item.name"
              v-bind:id="item.id"
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
      yeasts: [
        {
          name: "Imperial B63 Monastic",
          substitutes: [
            "Wyeast 1214 Belgian Ale",
            "White Labs 500 Monastery Ale"
          ]
        },
        {
          name: "Imperial W15 Suburban Brett",
          substitutes: []
        }
      ],
      fermentables: [
        {
          type: "grain",
          name: "Pilsner Malt",
          amount: 5,
          substitutes: ""
        },
        {
          type: "grain",
          name: "Vienna",
          amount: 1,
          substitutes: ""
        },
        {
          type: "grain",
          name: "Munich Malt",
          amount: 0.5,
          substitutes: ""
        },
        {
          type: "grain",
          name: "Cara Crystal",
          amount: 0.5,
          substitutes: ""
        },
        {
          type: "extract",
          name: "Dark Brown Sugar",
          amount: 0.35,
          substitutes: ""
        }
      ],
      hops: [
        {
          name: "Sorachi Ace",
          amount: 0.023,
          substitutes: ""
        },
        {
          name: "Amarillo",
          amount: 0.05,
          substitutes: ""
        }
      ]
    };
  },
  mounted() {},
  created() {},
  computed: {
    yeastList: function() {
      return this.yeasts.map(function(item) {
        return {
          name: item.name,
          id: item.name.toLowerCase().replace(/\W/g, "_"),
          substitutes: item.substitutes
        };
      });
    }
  }
};
</script>
