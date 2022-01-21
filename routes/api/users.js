const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middlewares');
const { validation } = require('../../middlewares');
const { ctrlWrapper } = require('../../middlewares');
const ctrl = require('../../controllers/users');

const {
    joiUserSignupSchema,
    joiUserLoginSchema
} = require('../../models');

router.post('/signup', validation(joiUserSignupSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiUserLoginSchema), ctrlWrapper(ctrl.login));

router.get('/logout', authenticate, ctrlWrapper(ctrl.logout));

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;