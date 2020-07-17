<template>
  <div>
    <button @click="increaseCounter()">increase counter</button>
    {{counter}}
    <div>
      <button @click="addToCart()">add to cart</button>
      {{item}}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['counter']),
    ...mapState('cart', ['item'])
  },
  methods: {
    ...mapActions(['updateCounter']),
    ...mapActions('cart', ['updateItem']),
    increaseCounter() {
      let payload = this.counter
      payload++
      this.updateCounter(payload)
    },
    addToCart() {
      let payload = this.item
      payload++
      this.updateItem(payload)
    }
  },
}
</script>

<style scoped>
</style>
