
const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const app = express()
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(multipart({
  uploadDir: path.resolve(__dirname, 'upload-file')
}))

const router = express.Router()
router.get('/simple/get', function(req,res) {
  console.log(res);
  res.json(req.query)
})

router.post('/simple/post', (req,res) => {
  res.json(req.body)
})

router.post('/simple/user', (req,res) => {
  res.json({
    code: 200,
    result: {
      name: 'sd',
      age: 12
    },
    message:'wqewqe'
  })
})

router.post('/simple/user1', (req,res) => {
  res.json({
    code: 200,
    result: null,
    message:'wqewqe'
  })
})

router.post('/simple/post500', (req,res) => {
  res.status(500);
  res.end()
})

router.post('/simple/postres', (req,res) => {
  res.json(req.body)
})

router.post('/simple/timeout', (req,res) => {
  setTimeout(() => {
    res.json(req.body)
  }, 666)
})

router.post('/simple/buffer', (req, res) => {
  let msg = []
  req.on('data', chunk => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

router.post('/more/upload', function(req, res) {
  console.log(req.body, req.file);
  res.end('upload success')
})

app.use(router)
const port = process.env.port || 3000
module.exports = app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
})