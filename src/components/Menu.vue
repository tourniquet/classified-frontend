<style lang="scss">
</style>

<template lange="jade">
  .row
    ul.categories
      li(v-for="menuItem in menu")
        a(href="#", v-text="menuItem.name", @click="setAccordion(menuItem.id)")
        ul(v-show="openAccordion === menuItem.id")
          li(v-for="child in menuItem.childs", v-text="child.name")
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
    },
    components: {
      Search
    }
  }
</script>
