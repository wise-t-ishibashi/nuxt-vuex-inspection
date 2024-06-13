export const state = () => ({
  counter: 0
})

export const getters = {
  counter: state => state.counter,
}

export const mutations = {
  seCounter (state, { counter }) {
    state.counter = counter
  }
}

export const actions = {
  increment ({ commit }, { count }) {
    commit('seCounter', { counter: count++ })
  },
  decrement ({ commit }, { count }) {
    commit('seCounter', { counter: count-- })
  }
}
