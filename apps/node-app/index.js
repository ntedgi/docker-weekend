const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('hi there ')
})
const port = 8080
app.listen(port, () => {
  console.log(`listin on port ${port}`)
})
