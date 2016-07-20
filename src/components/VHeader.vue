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
</style>

<template lang="jade">
  header
    modal
    registration
    login

    .logo
    button.navbar-toggle.collapsed(type="button", @click="openModal")
      span.icon-bar
      span.icon-bar
      span.icon-bar
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
