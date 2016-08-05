<style media="screen" lang="sass">
  body
    display: flex
    flex-direction: column
</style>

<template lang="jade">
  v-search
  router-view
  //- adpage
  //- newad
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
