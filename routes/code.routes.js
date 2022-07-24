const router = require("express").Router()
const { exec } = require('node:child_process');

const fs = require('fs')

router.post('/js', (req, res) => {
    fs.writeFileSync('test.js', req.body.code)
    res.json({ message: 'success' })
})


exec('"./../test.js" 2 4');

module.exports = router
