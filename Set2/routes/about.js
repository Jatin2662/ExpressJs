


const express = require('express')
const router = express.Router()


// router.use((req, res, next)=>{
//     console/log('Time : ', Date.now())
//     next()
// })

router.get('/', (req, res)=>{
    res.send('About ka home page')
})

router.get('/head', (req, res)=>{
    res.send('About ka head')
})

router.get('/posts/:slug', (req, res)=>{
    res.send(`Went in posts to ${req.params.slug}`)
})

module.exports = router;

