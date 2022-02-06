const express = require("express");
const router = express.Router();

const {
  ctrlWrapper,
  authenticate,
  validation,
  upload,
  avatarNormalizer,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const { joiUserSignupSchema, joiUserLoginSchema, joiUserVerifySchema } = require("../../models");

router.post("/signup", upload.single("avatar"), validation(joiUserSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiUserLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch("/avatars", authenticate, upload.single("avatar"), avatarNormalizer, ctrlWrapper(ctrl.setAvatar));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.getVerification));

router.post("/verify", validation(joiUserVerifySchema), ctrlWrapper(ctrl.setVerification));

module.exports = router;
