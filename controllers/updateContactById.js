const { NotFound } = require("http-errors");

const { Contact } = require("../models");

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {new: true})
  if (!updatedContact) {
    throw NotFound(`Contact with ID: ${id} not found!`)
  }
  res.status(200).json({
    message: `Contact with ID: ${ id } successfully updated!`,
    data: updatedContact
  })
}

module.exports = updateContactById;