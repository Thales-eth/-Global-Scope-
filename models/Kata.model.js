const { Schema, model } = require("mongoose");

const kataSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        content: {
            type: String,
        },
        kataCode: {
            type: String,
        },
        difficulty: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const Kata = model("Kata", kataSchema);

module.exports = Kata;
