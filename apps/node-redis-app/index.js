const express = require('express')
const redis = require('redis')

const app = express()

const VISITS_REDIS_KEY = 'visits'
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
})

const initIfNull = () => {
  client.get(VISITS_REDIS_KEY, (err, visits) => {
    if (visits === null) client.set(VISITS_REDIS_KEY, -999)
    console.log(err)
    console.log(err)
    console.log(err)
    console.log(err)
  })
}
initIfNull()

app.get('/', (req, res) => {
  client.get(VISITS_REDIS_KEY, (err, visits) => {
    process.exit(0)
    res.send('Number of visits is ' + visits)
    client.set(VISITS_REDIS_KEY, parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081')
})
