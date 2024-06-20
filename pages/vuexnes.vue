<template>
  <div>
    <h1>vuex test</h1>
    <button @click="decrement({ count: counter - 1 })">Decrement</button>
    Counter: {{ counter }}
    <button @click="increment({ count: counter + 1 })">Increment</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      counter: 'counter',
    }),
  },
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement',
    })
  }
};
</script>

<style scoped>
</style>
