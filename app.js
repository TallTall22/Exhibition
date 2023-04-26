const express = require('express')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

// routes
app.use(routes)

app.listen(port, () => {
  console.info(`App is listening on port${port}`)
})