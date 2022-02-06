const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers");

const { User } = require("../../models");

const { SITE_NAME } = process.env;

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use!");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const avatarURL = gravatar.url(email, { s: "250" });
  const verificationToken = nanoid();
  await User.create({
    ...req.body,
    avatarURL,
    verificationToken,
    password: hashPassword,
  });
  const mail = {
    to: `${email}`,
    subject: "Verify your email!",
    html: `<a target="_blank" href=${SITE_NAME}/api/users/verify/${verificationToken}>Click to verify your email!</a>`,
  };
  await sendEmail(mail);

  res.status(201).json({
    user: {
      email: email,
      avatarURL: avatarURL,
      subscription: "starter",
    },
  });
};

module.exports = signup;
