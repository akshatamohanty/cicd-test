const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json('Hello amazing Techladies!')
})

module.exports = app.listen(port)
