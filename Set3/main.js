

const express = require('express')
const fs = require('fs')
const contact = require('./routes/contact')
const app = express()
const port = 3000

// Built-in Middleware
app.use(express.static('public'))
app.use('/contact', contact)


app.use((req, res, next)=>{
    console.log("Middleware 1")
    
    console.log(req.headers)

    req.gduh = "Maine likha";

    fs.appendFile("Time.txt", `${Date.now()} is a ${req.method} \n`, ()=>{
        console.log("Done")
    })
    next()
})

app.use((req, res, next)=>{
    console.log("Middleware 2")
    console.log(`Date : ${Date.now() }`)
    next()
})

app.get('/', (req, res)=>{
    res.send('Aagya')
})

app.get('/about', (req, res)=>{
    res.send("About" + req.gduh)
})

app.listen(port, ()=>{
    console.log(`Port no : ${port}`)
})