const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
    {
        coursename: {
            type: String,
            unique: true,
            required: [true, "Coursename is required"]
        },
        description: {
            type: String,
            default: 'No description provided.'
        },
        programlanguage: {
            type: String,
        },
        subject: {
            type: String
        },
        theory: {
            type: String
        },
        test: {
            type: String
        },
        katas: {
            type: [String]
        },
        video: {
            type: String
        },
        resources: {
            type: String
        },
        certificated: {
            type: Boolean
        }

    },
    {
        timestamps: true,
    }
);

const Course = model("Course", courseSchema);

module.exports = Course;
