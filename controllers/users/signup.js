const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');

const { User } = require('../../models');

const signup = async (req, res) => {
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
}

module.exports = signup;