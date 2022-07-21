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
            type: {}
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
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
    }
);

const Course = model("Course", courseSchema);

module.exports = Course;
