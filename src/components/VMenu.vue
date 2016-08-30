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

          a:link, a:visited, a:active, a:hover
            height: 16px
            font-weight: 500
            line-height: 16px
            padding: 0

  @media (max-width: 1199px)
    .last-ads
      display: none

  @media (min-width: 1200px)
    .last-ads
      margin: 0 auto
      margin-top: 51px
      margin-bottom: 92px
      width: 1268px
      font-size: 13px
      .last-ads-item
        height: 50px
        line-height: 50px
        padding-left: 32px
        border-top: 2px solid #f6f6f6
        span
          display: inline-block
        .star
          width: 32px
        .image
          width: 30px
        .ad-title
          width: 852px
          a:link, a:visited, a:active
            text-decoration: none
            color: black
        .ad-category
          color: #e26433
          width: 125px
        .ad-date
          width: 135px
          text-align: right
</style>

<template lang="jade">
  menu
    ul.categories
      li.category-title(v-for="menuItem in menu")
        a(href="#", v-text="menuItem.title", @click="setAccordion(menuItem.id)", :class="[openAccordion === menuItem.id ? 'active-tab' : 'inactive-tab']")
        ul.subcategories(v-show="openAccordion === menuItem.id")
          li.subcategory-title(v-for="subcategory in menuItem.subcategories")
            //- , v-text="subcategory.title"
            a(href="/{{menuItem.title}}/{{subcategory.title}}") {{ subcategory.title }} {{ subcategory.category.title }}

    ul.last-ads
      li.last-ads-item(v-for="ad in ads")
        span.star S
        span.image I
        span.ad-title: a(href="{{ad.url}}") {{ad.title}}
        span.ad-category ss
        span.ad-date {{ad.date}}
</template>

<script>
  import io from '../sails'

  var data = {
    openAccordion: -1,
    menu: '',
    ads: []
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
    ready () {
      io.socket.get('/category/find/', (data) => {
        this.menu = data
      })

      io.socket.get('/ad/find', (data) => {
        let dataLength = data.length - 1
        for (let i = dataLength; i > (dataLength - 15); i--) {
          this.ads.push(data[i])
        }
      })
    }
  }
</script>
