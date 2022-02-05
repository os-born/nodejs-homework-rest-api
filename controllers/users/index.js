const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const setAvatar = require('./setAvatar');
const getVerification = require('./getVerification');
const setVerification = require('./setVerification');

module.exports = {
    signup,
    login,
    logout,
    getCurrent,
    setAvatar,
    getVerification,
    setVerification
}