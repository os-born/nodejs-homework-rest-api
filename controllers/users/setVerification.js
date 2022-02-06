const { NotFound, BadRequest } = require("http-errors");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const { SITE_NAME } = process.env;

const setVerification = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw NotFound(`User with email: ${email} not found.`);
  }
  if (user.verify) {
    throw BadRequest("Verification has already been passed!");
  }

  const { verificationToken } = user;

  const mail = {
    to: `${email}`,
    subject: "Verification email!",
    html: `<a target="_blank" href=${SITE_NAME}/api/users/verify/${verificationToken}>Click to verify your email!</a>`,
  };
  sendEmail(mail);
  res.status(200).json({
    message: "Verification email sent!",
  });
};

module.exports = setVerification;
