const ctrlWrapper = require('./ctrlWrapper');
const validation = require('./validation');
const authenticate = require('./authenticate');
const upload = require('./upload');
const avatarNormalizer = require('./avatarNormalizer');

module.exports = {
    ctrlWrapper,
    validation,
    authenticate,
    upload,
    avatarNormalizer
}