<style media="screen" lang="scss">
</style>

<template lang="jade">
  v-search
  //- router-view
  adpage
</template>

<script>
  import VSearch from './VSearch'
  import VMenu from './VMenu'
  import Newad from './Newad'
  import Adpage from './Adpage'

  export default {
    components: {
      VSearch,
      VMenu,
      Newad,
      Adpage
    }
  }
</script>
