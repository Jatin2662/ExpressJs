

const express = require('express');
const about = require('./routes/about');
const shop = require('./routes/shop');

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/about', about)
app.use('/shop', shop)

app.get('/', (req, res)=>{
    console.log('Get request');
    res.send('Aagya');
})

app.post('/', (req, res)=>{
    console.log("Post request")
    res.send("Post")
})

app.put('/', (req, res)=>{
    console.log("Put request");
    res.send("Put");
})

app.get('/index', (req, res)=>{
    console.log("Index page");

    // To show complete html file we use 
    res.sendFile('templates/index.html', {root : __dirname});

    // res.send("In the index page")
})

app.get('/api', (req, res)=>{
    res.json({ a : 1, b : 2, c : 3, d : 4 });
})

app.listen(port, ()=>{
    console.log(`Port no : ${port}`);
})