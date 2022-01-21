const { NotFound } = require("http-errors");

const { Contact } = require("../models");

const removeContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndRemove(id);
  if (!contact) {
    throw NotFound(`Contact with ID: ${id} not found!`)
  }
  res.status(200).json({
    message: `Contact with ID: ${ id } successfully deleted!`,
  })
}

module.exports = removeContactById;