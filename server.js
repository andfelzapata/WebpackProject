const express = require('express')
const path = require('path')

const app = express()

if(process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.js')
  const webpackMiddleWare = require('webpack-dev-middleware')

  app.use(webpackMiddleWare(webpack(webpackConfig)))
} else {
  app.use(express.static('dist'))
  app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })
}

app.listen(3050, () => console.log('Listening'))