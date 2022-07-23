const router = require("express").Router()
const fs = require('fs')

router.post('/js', (req, res) => {
    fs.writeFileSync('test.js', req.body.code)
    res.json({ message: 'success' })
})

module.exports = router
