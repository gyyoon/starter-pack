const https = require('https')
const path = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// mock vod list generator
const getVodList = require('./vod.js')

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {

  if (req.method === 'POST') {
    // req.body.createdAt = Date.now()
  }
  if (req.method === 'GET') {
    //
  }

  // add delay
  const delay = req.query.delay || 1000

  console.log(`REQUEST: ${req.method} ${req.url} delay(${delay}ms)`)
  setTimeout(next, delay);
})

// GET: vod lists
server.get('/vod', (req, res) => {
  const currentPage = req.query.current_page || 1
  const maxPage = req.query.max_page || 10

  res.jsonp(getVodList(currentPage, maxPage))
})

// GET: post lists
server.post('/vod', (req, res) => {
  const currentPage = req.body.current_page || 1
  const maxPage = req.body.max_page || 10
  res.jsonp(getVodList(currentPage, maxPage))
})


// ssl key
const keyFile = path.join(__dirname, 'ssl/mock.key');
const certFile = path.join(__dirname, 'ssl/mock.cert');
// run server
https
  .createServer(
    {
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(certFile),
    },
    server
  )
  .listen(3001, () => {
    console.log(
      'Go to https://localhost:3001/'
    );
  });