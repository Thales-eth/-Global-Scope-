const { Schema, model } = require("mongoose");

const kataSchema = new Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Kata = model("Kata", kataSchema);

module.exports = Kata;
