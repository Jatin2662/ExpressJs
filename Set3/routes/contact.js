


const express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
    console.log("Contact's middleware")
})

router.get('/', (req, res)=>{
    res.send("Contact page")
})

router.get('/connect', (req, res)=>{
    res.send("Connect us")
})

module.exports = router;