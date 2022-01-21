const { Schema, model } = require("mongoose");
const Joi = require('joi');


// eslint-disable-next-line no-useless-escape
const regexpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

const userSchema = Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: regexpEmail,
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
}, { versionKey: false, timestamps: true });

const joiUserSignupSchema = Joi.object({
    email: Joi.string().pattern(regexpEmail).required(),
    password: Joi.string().min(6).required()
})

const joiUserLoginSchema = Joi.object({
    email: Joi.string().pattern(regexpEmail).required(),
    password: Joi.string().min(6).required()
})

const User = model("user", userSchema);

module.exports = {
    User,
    joiUserSignupSchema,
    joiUserLoginSchema
}