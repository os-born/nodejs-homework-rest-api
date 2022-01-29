const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const { User } = require('../../models');

const signup = async (req, res) => {
    
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if ( user ) {
        throw new Conflict("Email in use!");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    const avatarURL = gravatar.url(email, { s: '250' });
    console.log(avatarURL);
    await User.create({...req.body, avatarURL, password: hashPassword});
    res.status(201).json({
        "user": {
        "email": email,
        "avatarURL": avatarURL,
        "subscription": "starter"
        }
    })
}

module.exports = signup;