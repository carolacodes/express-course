const {Router} = require('express')
const router = Router()

router.get('/profile', (req, res) => {
    res.send('profile page')
})

router.get('/UserName', (req, res) => {
    res.send('Username route')
})

module.exports = router