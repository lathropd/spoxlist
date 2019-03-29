const express = require('express')

// create an app
let app = express()
app.get('/', function(req, res) {
    res.send('<h1>Hello Herky</h1>')
})