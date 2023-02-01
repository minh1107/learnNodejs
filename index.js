const express = require('express')
const app = express()
const port = 3001
app.get('/', (req, res) => res.send('hello world'))
app.get('/minh', (req, res) => res.send('hello Minh'))
app.get('/minhsa', (req, res) => res.send('hello Minh'))
app.get('/minhsads', (req, res) => res.send('hello Minh'))
app.get('/nam', (req, res) => res.send('heldlo Minh'))
app.get('/trang-chu', (req, res) => res.send('trang chu'))



app.listen(port, () => console.log(`example app at http://localhost:${port}`))