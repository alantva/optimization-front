export default {
  REQUEST({ commit }) {
    commit('SET_LOADING', true)
    commit('SET_ERROR')
  },
  RESPONSE({ commit }) {
    commit('SET_LOADING', false)
  },
  ERROR({ commit }, message) {
    commit('SET_LOADING', false)
    commit('SET_ERROR', message)
  }
}
