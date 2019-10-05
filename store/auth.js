import AUTHENTICATE from '~/graphql/AUTHENTICATE'
import VERIFY from '~/graphql/VERIFY'

export const state = () => ({
  user: null,
  token: null,
  authenticated: false
})

export const actions = {
  async login({ commit }, { apollo, data }) {
    await apollo
      .query({
        query: AUTHENTICATE,
        variables: {
          email: data.email,
          password: data.password
        }
      })
      .then(({ data }) => {
        commit('LOGIN', data.authenticate)
      })
      .catch(error => {
        throw error
      })
  },
  async verify({ commit, dispatch }, { apollo, token }) {
    await apollo
      .query({
        query: VERIFY,
        variables: { token: token }
      })
      .then(({ data }) => {
        commit('LOGIN', {
          token: data.verify.token,
          user: data.verify.user
        })
      })
      .catch(error => {
        commit('LOGOUT')
        throw error
      })
  }
}

export const getters = {
  user: state => {
    return state.user
  },
  token: state => {
    return state.token
  }
}

export const mutations = {
  LOGIN(state, status) {
    state.user = status.user
    state.token = status.token
    state.authenticated = true
    this.$apolloHelpers.onLogin(status.token)
    // eslint-disable-next-line no-console
    console.log(state)
  },
  LOGOUT(state) {
    state.user = null
    state.token = null
    state.authenticated = false
    this.$apolloHelpers.onLogout()
  }
}
