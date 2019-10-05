export default function({ app, store, req }) {
  if (process.client) {
    if (app.$apolloHelpers.getToken() != null) {
      app.store.dispatch('auth/verify', {
        apollo: app.apolloProvider.defaultClient,
        token: app.$apolloHelpers.getToken()
      })
    } else {
      app.store.commit('auth/logout')
    }
  }
}
