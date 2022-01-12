const { Contact } = require("../models");
const {NotFound} = require('http-errors')


const getContactById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      throw NotFound(`Contact with ID: ${id} not found!`)
    }
    res.status(200).json(contact)
  } catch (error) {
    if (error.message.includes("Cast to ObjectId failed")) {
      error.status = 404
    }
    next(error)
  }
}

module.exports = getContactById;