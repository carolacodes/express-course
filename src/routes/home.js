const {Router} = require('express')
const axios = require('axios')
const router = Router()


router.get('/', (req, res) => {
    let isActive = true
    res.render('index', {
        title: 'index page',
        isActive
    })
})

router.get('/about', (req, res) => {
    const title = "mi pag creada desde express"
    res.render('about')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/post', async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('posts', {
        posts: response.data
    })
})

module.exports = router