const {Router} = require('express')
const router = Router()

router.get('/about', (req, res) => {
    const title = "mi pag creada desde express"
    res.render('index', {title})
})

router.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

module.exports = router