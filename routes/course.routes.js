const router = require("express").Router()

const Course = require('./../models/Course.model')

router.get("/getAllCourses", (req, res) => {

    Course
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneCourse/:course_id", (req, res) => {

    const { course_id } = req.params

    Course
        .findById(course_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/editCourse/:course_id", (req, res) => {

    const { course_id } = req.params

    Course
        .findById(course_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveCourse", (req, res) => {

    Course
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/deleteCourse/:course_id", (req, res) => {


    const { course_id } = req.params

    Course
        .findByIdAndDelete()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




module.exports = router