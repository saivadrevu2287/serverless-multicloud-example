//const express = require('express')
const express = require('serverless-express/express')
const app = express()
const port = 3000

// Azure's default URI path for this is /api/app and it sends that through so we need to cater for that
app.get(['/','/api/app'], (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app