const express = require('express')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

// use body-parser
app.use(express.urlencoded({extended:true}))

//use json
app.use(express.json())
// routes
app.use(routes)

app.listen(port, () => {
  console.info(`App is listening on port${port}`)
})