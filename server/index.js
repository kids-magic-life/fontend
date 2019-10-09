const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const consola = require('consola')
const api = require('./api/index')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser())
  app.use(async ctx => {
    if (ctx.request.url === '/api/sendMail' && ctx.request.method === 'POST') {
      const result = await api.contact.sendMail(ctx.request.body)
      if(result) {
        ctx.status = 200
        ctx.body = {
          status: 200,
          message: 'Your message successfully sent!'
        }
      } else {
        ctx.status = 500
        ctx.body = {
          status: 500,
          error: 'ERROR!!'
        }
      }
    } else {
      ctx.status = 200
      ctx.respond = false // Bypass Koa's built-in response handling
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    }
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
