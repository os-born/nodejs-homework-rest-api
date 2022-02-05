const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "os_born@meta.ua" };
    await sgMail.send(email).then(() => console.log("Email sent!"));
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = sendEmail;
