const router = require("express").Router()
// import { isAuthenticated } from "../middleware/jwt.middleware"
const User = require('./../models/User.model')

router.get("/getAllUsers", (req, res) => {

    User
        .find()
        // .select()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneUser/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('courses')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/editUser/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndUpdate(user_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// router.put("/enroll/:course_id", (req, res) => {

//     console.log('QUIEN ERES', req.payload,)

//     const { course_id } = req.params

//     const { _id: user_id } = req.payload

//     User
//         .findByIdAndUpdate(user_id, { $addToSet: { courses: course_id } })
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

router.delete("/deleteUser/:user_id", (req, res) => {


    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router
