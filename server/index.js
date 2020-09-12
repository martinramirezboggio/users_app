const express = require('express')
const axios = require('axios')
const path = require('path')


const app = express()
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send("<h1>Hello word</h1>")
})

const URL = "https://randomuser.me/api/?page=1&results=10"

app.get('/users', (req, res) => {
  axios.get(URL).then( response => {
    res.send(response.data)
  })
})

app.listen(3030, () => {
  console.log("Server started on port 3030")
})

