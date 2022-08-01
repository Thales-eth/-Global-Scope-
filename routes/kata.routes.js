const router = require("express").Router()
const Kata = require('./../models/Kata.model')

router.get("/getOneKata/:kata_id", (req, res) => {

    const { kata_id } = req.params

    Kata
        .findById(kata_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/getAllKatas", (req, res) => {

    Kata
        .find()
        .sort({ 'difficulty': 1 })
        .then(response => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.post("/saveKata", (req, res) => {

    Kata
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/randomKata", (req, res) => {

    Kata
        .find()
        .then(response => {
            let random = Math.floor(Math.random() * response.length)
            res.json(response[random])
        })
        .catch(err => res.status(500).json('err'))
})


module.exports = router
