const router = require("express").Router()
const exec = require('child_process').exec;
const fs = require('fs')

router.post('/js', (req, res) => {

    const { code, kataCode } = req.body

    console.log('HOLA SOY EL KATA CODE:', kataCode)

    fs.writeFile(`katas/${kataCode}/kata.js`, code, (err) => {
        if (err) {
            console.log(err)
        }

        res.json({ kataCode })
    })
})

router.post('/check', (req, res, next) => {

    const { kataCode } = req.body

    console.log('ESTO LLEGA, NO?', kataCode)

    exec('npm i; npm test',
        {
            cwd: `katas/${kataCode}`
        },
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            res.json({ results: stderr, output: stdout })
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        })

})

module.exports = router
