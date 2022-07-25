const router = require("express").Router()
const { isAuthenticated } = require("./../middleware/jwt.middleware")
const Course = require('./../models/Course.model')

router.get("/getAllCourses", (req, res) => {

    Course
        .find()
        // .select()
        .then(response => res.json(response))
        .catch(err => res.status(500).json('err'))
})

router.get("/getRandomCourse", (req, res) => {


    Course
        .find()
        .then(response => {
            let random = Math.floor(Math.random() * response.length)
            res.json(response[random])
        })
        .catch(err => res.status(500).json('err'))
})


router.get("/getOneCourse/:course_id", (req, res) => {

    const { course_id } = req.params
    console.log('ID', course_id)
    Course
        .findById(course_id)
        .then(response => {
            console.log('response', response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.put("/editCourse/:course_id", isAuthenticated, (req, res) => {

    const { course_id } = req.params

    Course
        .findByIdAndUpdate(course_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveCourse", isAuthenticated, (req, res) => {

    Course
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/deleteCourse/:course_id", (req, res) => {

    const { course_id } = req.params

    Course
        .findByIdAndDelete(course_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




module.exports = router