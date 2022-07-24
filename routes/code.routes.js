const router = require("express").Router()
const exec = require('child_process').exec;
const { text } = require("express");
const fs = require('fs')

router.post('/js', (req, res) => {

    // 1st try
    fs.writeFileSync('sum.js', req.body.code)

    // const funCode = exec('npm test',
    //     (error, stdout, stderr) => {
    //         console.log(`stdout: ${stdout}`);
    //         console.log(`stderr: ${stderr}`);
    //         if (error !== null) {
    //             console.log(`exec error: ${error}`);
    //         }
    //         res.json({ results: stderr })
    //     });

    // console.log(typeof exec)

    // fs.writeFile('sum.js', req.body.code, funCode)

})

module.exports = router


