<style lang="sass">
  header
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    background: #262626
    height: 93px
    padding-left: 30px

    .logo
      background: #fff
      height: 34px
      width: 85px

    .navbar-toggle
      position: relative
      float: right
      padding: 9px 10px
      margin-top: 8px
      margin-right: 15px
      margin-bottom: 8px
      background-color: transparent
      background-image: none
      border: 1px solid transparent
      border-radius: 4px

    .icon-bar
      background-color: #fff
      display: block
      width: 26px
      height: 2px
      border-radius: 1px
      margin-bottom: 5px

  @media (max-width: 1199px)
    .desktop-screen
      display: none

  @media (min-width: 1200px)
    header
      display: flex
      flex-direction: row
      justify-content: space-around

      .navbar-toggle
        display: none

      .desktop-screen
        color: white
        font-size: smaller
        li
          display: inline-block
          padding: 16px

          .post-ad-button
            display: table
            background: transparent linear-gradient(#e7774a, #df5b27) repeat scroll 0% 0%
            border: 0px none
            border-radius: 22px
            color: #fff
            margin: 5px auto 0px
            height: 42px
            width: 182px
</style>

<template lang="jade">
  header
    modal
    registration
    login

    a.logo(href="/")
    button.navbar-toggle.collapsed(type="button", @click="openModal")
      span.icon-bar
      span.icon-bar
      span.icon-bar

    ul.desktop-screen
      li(style="display: none") Înregistrare
      li(style="display: none") Contul meu
      li: input.post-ad-button(type="button", onclick="location.href='/newad'", value="Postează anunț")
</template>

<script type="text/javascript">
  import Modal from './Modal'
  import Registration from './Registration'
  import Login from './Login'

  export default {
    components: {
      Modal,
      Registration,
      Login
    },
    methods: {
      openModal () {
        this.$broadcast('open-modal')
      }
    }
  }
</script>
