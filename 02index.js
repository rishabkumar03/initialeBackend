require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('rishab.verma03')
})

app.get('/login', (req, res) => {
    res.send('<h1>Fuck Your Feelings</h1>')
})

app.get('/darkTheme', (req, res) => {
    res.send('<h3>Is my learning worth the wait?</h3>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
