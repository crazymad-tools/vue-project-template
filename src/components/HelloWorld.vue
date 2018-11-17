<template>
  <div>
    <button @click="add">add</button>
    <span>{{ count }}</span>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('UPDATE_COUNT', this.count + 1)
    },
    reduce () {
      this.$store.commit('UPDATE_COUNT', this.count - 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
