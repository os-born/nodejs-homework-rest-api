const { Unauthorized } = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    console.log(req.body);
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
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json(
        {
        "token": token,
        "user": {
            "email": email,
            "subscription": "starter"
            }
        }
    )
}

module.exports = login;