const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"]
    },
    password: {
      type: String,
    },
    description: {
      type: String,
      default: 'No description provided.'
    },
    avatar: {
      type: String,
      default: 'https://w7.pngwing.com/pngs/552/807/png-transparent-pepe-frog-illustration-gif-imgur-tenor-know-your-meme-twitch-emotes-vertebrate-meme-fictional-character.png'
    },
    role: {
      type: String,
      enum: ['USER', 'PREMIUM', 'ADMIN'],
      default: 'USER'
    },
    points: {
      type: Number,
      default: 0
    },
    courses: [{
      type: Schema.Types.ObjectId,
      ref: 'Course',
    }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
