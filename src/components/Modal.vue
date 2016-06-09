<style lang="scss">
  .mobile-modal {
    z-index: 2;
    display: block;
    position: absolute;
    background: #fff;
    height: 284px;
    width: 100%;
    margin: -47px 0 0 -30px;
    box-shadow: 6px 8px 7px #e3e3e3;

    .close-modal {
      background: url('../assets/close.png') no-repeat;
      height: 24px;
      width: 24px;
      float: right;
      margin-right: 25px;
      margin-top: 34px;
    }

    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 97px;
      margin-top: 95px;
      font-size: 18px;
      letter-spacing: 0.10em;

      li {
        margin-bottom: 35px;
      }

      a:link, a:visited, a:active {
        color: #000;
        text-decoration: none;
      }

      .post-ad-button {
        display: table;
        background: transparent linear-gradient(#e7774a, #df5b27) repeat scroll 0% 0%;
        border: 0px none;
        border-radius: 22px;
        color: #fff;
        margin: 5px auto 0px;
        height: 42px;
        width: 182px;
      }
    }
  }
</style>

<template lang="jade">
  nav.mobile-modal(v-if="isVisible")
    .close-modal(@click="closeModal")
    ul.menu
      li: a(href="#") Înregistrare
      li: a(href="#") Contul meu
      li: input.post-ad-button(type="button", onclick="location.href='#'", value="Postează anunț")
</template>

<script>
  export default {
    data () {
      return {
        isVisible: false
      }
    },
    methods: {
      closeModal () {
        this.isVisible = false
      }
    },
    events: {
      'open-modal' () {
        this.isVisible = true
      }
    }
  }
</script>
