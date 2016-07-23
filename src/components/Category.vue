<style lang="sass">
  .categories
    padding: 0 30px

    .category-title
      border: 2px solid #f6f6f6
      border-radius: 8px
      margin-bottom: 20px

      a:link, a:visited, a:active, a:hover
        font-size: 15px
        font-weight: 700
        letter-spacing: .07em
        color: black
        text-decoration: none
        height: 58px
        line-height: 58px
        display: block
        padding-left: 30px

      .active-tab
        background: url('../assets/arrow_up.png') no-repeat #f6f6f6
        background-position: 92%

      .inactive-tab
        background: url('../assets/arrow_down.png') no-repeat
        background-position: 92%

      .subcategories
        padding-left: 29px

        .subcategory-title
          margin: 28px 0
</style>

<template lang="jade">
  menu
    ul.categories
      li.category-title(v-for="menuItem in menu")
        a(href="#", v-text="menuItem.title")
        ul.subcategories
          li.subcategory-title(v-for="subcategory in menuItem.subcategories", v-text="subcategory.title")
</template>

<script>
  import io from '../sails'

  var data = {
    menu: ''
  }
  export default {
    data () {
      return data
    },
    ready () {
      let category = window.location.pathname.split('/', 3)[2]
      io.socket.get(`/category/${category}`, (data) => {
        this.menu = data
      })
    }
  }
</script>
