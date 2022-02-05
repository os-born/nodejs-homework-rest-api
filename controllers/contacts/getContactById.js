const { NotFound } = require('http-errors');

const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    throw NotFound(`Contact with ID: ${id} not found!`)
  }
  res.status(200).json(contact)
}

module.exports = getContactById;