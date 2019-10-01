export default {
  GET_LOADING: state => {
    return state.loading > 0
  },
  GET_ERROR: state => {
    return state.error
  }
}
