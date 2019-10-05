<template>
  <main style="padding-top: 100px">
    <b-container>
      <b-row class="organic-product sec-space">
        <b-col cols="12" sm="6" lg="4" offset-sm="3" offset-lg="4">
          <b-col ref="loginContainer" class="card">
            <div style="margin-top: 24px">
              <h6>Sign in</h6>
            </div>

            <div class="card-block">
              <br />
              <form>
                <b-alert v-show="errors.length > 0" show variant="danger">
                  <span v-for="error in errors" :key="error.message">
                    {{ error.message }}
                  </span>
                </b-alert>

                <div class="form-group">
                  <input
                    v-model="email"
                    class="form-control input-lg"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group">
                  <input
                    v-model="password"
                    class="form-control input-lg"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <button
                  class="theme-btn btn-block"
                  type="button"
                  :disabled="email == null || password == null"
                  @click="login()"
                >
                  Login
                </button>
              </form>
              <br />
            </div>

            <!--            <b-col style="margin: 24px auto">-->
            <!--              <b-row class="text-center">-->
            <!--                <b-col cols="6">-->
            <!--                  <a href="user-register.html">Register</a>-->
            <!--                </b-col>-->

            <!--                <b-col cols="6">-->
            <!--                  <a href="user-forget-pass.html">Forget password?</a>-->
            <!--                </b-col>-->
            <!--              </b-row>-->
            <!--            </b-col>-->
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import AUTHENTICATE from '~/graphql/AUTHENTICATE'

export default {
  data() {
    return {
      email: null,
      password: null,
      errors: []
    }
  },
  methods: {
    async login() {
      this.errors = []

      const loading = this.$loading.show({
        container: this.$refs.loginContainer
      })

      await this.$apollo
        .query({
          query: AUTHENTICATE,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(({ data }) => {
          this.$store.commit('auth/LOGIN', {
            token: data.authenticate.token,
            user: data.authenticate.user
          })
          this.$router.push('/')
          loading.hide()
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
          this.errors = error.graphQLErrors.map(error => error)
          loading.hide()
        })
    }
  }
}
</script>

<style scoped></style>
