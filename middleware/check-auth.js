export default async function({ app, store, req }) {
  if (process.client) {
    if (app.$apolloHelpers.getToken() != null) {
      await app.store.dispatch('auth/verify', {
        apollo: app.apolloProvider.defaultClient,
        token: app.$apolloHelpers.getToken()
      })
    } else {
      await app.store.commit('auth/LOGOUT')
    }
  }
}
