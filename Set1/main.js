const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello Ji!')
})

app.get('/about', (req, res) =>{
    res.send('About')
})

app.get('/home', (req, res) =>{
    res.send('Home')
})

app.get('/home/channels', (req, res) =>{
    res.send('Home channels')
})

app.get('/home/:slug', (req, res) =>{
    // console.log(req)

    // http://localhost:3000/home/Gojk
    console.log(req.params)
    // http://localhost:3000/home/Gojk?location=in&ip=90875
    console.log(req.query)
    res.send(`Home main ${req.params.slug}`)
})

app.get('/home/:slug/:second', (req, res) =>{
    res.send(`Home main ${req.params.slug} and ${req.params.second}`)
})

app.get('/contact', (req, res) =>{
    res.send('Contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})