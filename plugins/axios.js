export default function({ $axios, store }) {
  $axios.interceptors.request.use(
    config => {
      if (store.getters['auth/GET_TOKEN']) {
        config.headers.authorization =
          'Bearer ' + store.getters['auth/GET_TOKEN']
      }
      return config
    },
    error => Promise.reject(error)
  )

  $axios.onRequest(() => {
    store.dispatch('api/REQUEST')
  })
  $axios.onResponse(() => {
    store.dispatch('api/RESPONSE')
  })
  $axios.onError(error => {
    const statusCode = parseInt(error.response && error.response.status)

    if (statusCode === 401) store.dispatch('auth/LOGOUT')

    store.dispatch('api/ERROR', error.message)
  })
}
