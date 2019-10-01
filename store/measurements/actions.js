export default {
  FETCH_MEASUREMENT() {
    return this.$axios.$get('/measurement').catch(() => 0)
  },
  FETCH_MEASUREMENTS() {
    return this.$axios.$get('/measurements').catch(() => [])
  }
}
