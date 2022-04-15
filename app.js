// 'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('main')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)