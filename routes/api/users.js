const express = require('express');
const router = express.Router();
const { BadRequest, Conflict, Unauthorized } = require("http-errors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
    User,
    joiUserSignupSchema,
    joiUserLoginSchema
} = require('../../models');

const { SECRET_KEY } = process.env;

router.post('/signup', async (req, res, next) => {
    try {
        const { error } = joiUserSignupSchema.validate(req.body)
        if ( error ) {
            throw new BadRequest(error.message)
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if ( user ) {
            throw new Conflict("Email in use!");
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        await User.create({...req.body, password: hashPassword});
        res.status(201).json({
            "user": {
            "email": email,
            "subscription": "starter"
            }
        })
        
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const { error } = joiUserLoginSchema.validate(req.body)
        if ( error ) {
            throw new BadRequest(error.message)
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if ( !user ) {
            throw new Unauthorized("Email or password is wrong!");
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            throw new Unauthorized("Email or password is wrong!");
        }
        const payload = {
            id: user._id
        };
        const token = jwt.sign(payload, SECRET_KEY);
        
        res.status(200).json(
            {
            "token": token,
            "user": {
                "email": email,
                "subscription": "starter"
                }
            }
        )
    } catch (error) {
        next(error)
    }
})

module.exports = router;