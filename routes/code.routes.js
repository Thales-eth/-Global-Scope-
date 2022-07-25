const router = require("express").Router()
const exec = require('child_process').exec;
const fs = require('fs')

router.post('/js', (req, res) => {

    const { code, kata_id } = req.body

    fs.writeFile('katas/001/kata.js', code, (err) => {
        if (err) {
            console.log(err)
        }

        res.json({ kata_id })
    })
})

router.post('/check', (req, res, next) => {

    exec('npm test',
        {
            cwd: 'katas/001'
        },
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            res.json({ results: stderr })
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        })

})

module.exports = router