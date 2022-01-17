const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;

    try {
        
    } catch (error) {
        next(error)
    }
};

module.exports = authenticate;