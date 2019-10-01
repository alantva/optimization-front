export default {
  SET_LOADING: (state, data = false) => {
    if (data) {
      state.loading++
      return
    }
    state.loading--
  },
  SET_ERROR: (state, message = null) => {
    state.error = message
  }
}
