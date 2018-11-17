<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('getCount')
  }
}
</script>

<style lang="scss">
#app {
}
</style>
