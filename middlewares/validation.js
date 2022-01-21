const { BadRequest } = require('http-errors');

const validation = (schema) => {
    const func = (req, res, next) => {
    const { error } = schema.validate(req.body)
        if (error) {
            next(new BadRequest(error.message))
            return;
        }
    next()
    }
    return func;
}

module.exports = validation;