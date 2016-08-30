<style lang="sass">
  @mixin button
    display: block
    background: #fff
    border: 2px solid #f6f6f6
    border-radius: 8px
    height: 58px
    width: 100%
    padding-left: 15px
    margin-bottom: 18px
    font-size: 14px
    letter-spacing: 0.08em
    text-align: left

  .button
    @include button

  .active-tab
    background: url('../assets/arrow_up.png') no-repeat #f6f6f6
    background-position: 92%

  .inactive-tab
    background: url('../assets/arrow_down.png') no-repeat
    background-position: 92%

  .ul-width
    position: relative
    width: 100%

  .hide-ul-menu
    display: none !important

  .show-ul-menu
    @extend .button
    position: absolute
    background: #fff
    box-sizing: border-box
    box-shadow: 2px 2px 6px #888888
    border-radius: 3px
    height: auto

  @media (min-width: 1200px)
    .desktop-button
      @include button
      margin-bottom: 25px
      width: 75%

    .active-tab
      background: url('../assets/arrow_up.png') no-repeat #f6f6f6
      background-position: 92%

    .inactive-tab
      background: url('../assets/arrow_down.png') no-repeat
      background-position: 92%

    .ul-width
      position: relative
      width: 100%

    .hide-ul-menu
      display: none !important

    .show-ul-menu
      @include button
      position: absolute
      background: #fff
      box-sizing: border-box
      box-shadow: 2px 2px 6px #888888
      border-radius: 3px
      height: auto
</style>

<template lang="jade">
  button.button.desktop-button(type="button", @click.stop="open", :class="[hidden ? 'inactive-tab' : 'active-tab']") {{ name }}
  .ul-width
    ul.show-ul-menu(:class="{'hide-ul-menu': hidden}")
      li(v-for="item in elements", @click="select($index)") {{ item.title }}
</template>

<script>
  let id = 0

  export default {
    props: ['name', 'elements'],
    data () {
      return {
        hidden: true,
        id: ++id
      }
    },
    methods: {
      open () {
        this.$dispatch('close-drop-down', this.id)
        this.hidden = !this.hidden
      },
      select (index) {
        this.$dispatch('change', index)
        this.hidden = true
      }
    },
    ready () {
      this.$on('close-drop-down', (val) => {
        if (val !== this.id) {
          this.hidden = true
        }
      })
    }
  }
</script>
