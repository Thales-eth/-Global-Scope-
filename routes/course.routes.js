const router = require("express").Router()

const Course = require('./../models/Course.model')

router.get("/getAllCourses", (req, res) => {

    Course
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json('err'))
})


router.get("/getOneCourse/:course_id", (req, res) => {

    const { course_id } = req.params

    Course
        .findById(course_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/editCourse/:course_id", (req, res) => {

    const { course_id } = req.params

    Course
        .findByIdAndUpdate(course_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveCourse", (req, res) => {

    // const { _id: owner } = req.payload

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