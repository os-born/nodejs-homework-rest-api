const { Contact } = require("../models");

const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { name, email, phone }
  const newBody = await Contact.create(newContact)
  res.status(201).json({
    message: `New contact with name: ${newBody.name} successfully created!`,
    data: newBody
  })
}

module.exports = addContact;