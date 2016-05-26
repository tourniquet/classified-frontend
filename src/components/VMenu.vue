<style lang="scss">
  ul.categories {
    padding: 0 30px;

    li.category-title {
      border: 2px solid #f6f6f6;
      border-radius: 8px;
      margin-bottom: 20px;

      a:link, a:visited, a:active, a:hover {
        font-weight: 700;
        letter-spacing: .1em;
        color: black;
        text-decoration: none;
        height: 67px;
        line-height: 67px;
        display: block;
        padding-left: 30px;
      }

      a.active-tab {
        background: #f6f6f6;
      }

      ul.subcategories {
        @extend ul.categories;

        li.subcategory-title {
          margin: 30px 0;
        }
      }
    }
  }
</style>

<template lang="jade">
  menu
    ul.categories
      li.category-title(v-for="menuItem in menu")
        a(href="#", v-text="menuItem.name", @click="setAccordion(menuItem.id)", :class="{ 'active-tab': openAccordion === menuItem.id }")
        ul.subcategories(v-show="openAccordion === menuItem.id")
          li.subcategory-title(v-for="child in menuItem.childs", v-text="child.name")
</template>

<script>
  var data = {
    openAccordion: -1,
    menu: [
      {
        id: 5,
        name: 'Imobiliare',
        childs: [
          {
            id: 1,
            name: 'Apartamente'
          },
          {
            id: 2,
            name: 'Case si Vile'
          },
          {
            id: 3,
            name: 'Terenuri'
          },
          {
            id: 4,
            name: 'Imobil comercial'
          },
          {
            id: 5,
            name: 'Altele'
          }
        ]
      },
      {
        id: 4,
        name: 'Temporary',
        childs: [
          {
            id: 3,
            name: 'Hello'
          }
        ]
      }
    ]
  }
  export default {
    data () {
      return data
    },
    methods: {
      setAccordion (id) {
        if (this.openAccordion === id) {
          this.openAccordion = -1
          return
        }
        this.openAccordion = id
      }
    }
  }
</script>
