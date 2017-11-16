const Koa = require('koa')
const proxy = require('koa-proxies')

const app = new Koa()

app.use(proxy('/', {
  target: 'https://www.google.com',
  changeOrigin: true,
  logs: true,
}))

const port = process.env.PORT || 10010

app.listen(port, () => {
  console.log(`listening at ${port}`)
})
