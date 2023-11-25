require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000
// import 'dotenv/config' from 'dotenv'

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Me!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login modified</h1>')
}) 


app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening on port ${port}`)
})
console.log(process.env)



