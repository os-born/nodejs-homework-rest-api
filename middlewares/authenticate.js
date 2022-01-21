const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== 'Bearer') {
        const error = new Unauthorized("Not authorized!");
        next(error);
    };
    
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        if (!id) {
            const error = new Unauthorized("Not authorized!");
            next(error);
        }
        const user = await User.findById(id);
        if (!user || !user.token) {
            const error = new Unauthorized("Not authorized!");
            next(error);
        }
        req.user = user;
        next();
    } catch (error) {
        error.status = 401;
        next(error);
    }
};

module.exports = authenticate;