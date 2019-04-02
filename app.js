const express = require('express')

// create an app
let app = express()
app.get('/', function(req, res) {
    res.send('Hello Herky')
})


// run server in development mode
// let hostname = 'localhost'
let port = 3000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
}) 