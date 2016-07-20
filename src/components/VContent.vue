<style media="screen" lang="scss">
</style>

<template lang="jade">
  v-search
  router-view
</template>

<script>
  import VSearch from './VSearch'
  import VMenu from './VMenu'
  import Newad from './Newad'

  export default {
    components: {
      VSearch,
      VMenu,
      Newad
    }
  }
</script>
