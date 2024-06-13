<template>
    <div>
        <h1>vuex test</h1>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as Vuex from 'vuex'

export default {
    async created() {
        console.log(this)
        console.log(this.$store) // undefined
    }
};
</script>

<style scoped>
</style>