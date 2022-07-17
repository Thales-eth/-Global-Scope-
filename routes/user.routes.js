const router = require("express").Router()

const User = require('./../models/User.model')

router.get("/getAllUsers", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneUser/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/editUser/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/deleteUser/:user_id", (req, res) => {


    const { user_id } = req.params

    User
        .findByIdAndDelete()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router
