const { Contact } = require("../models");
const { NotFound } = require("http-errors");

const removeContactById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndRemove(id);
    if (!contact) {
      throw NotFound(`Contact with ID: ${id} not found!`)
    }
    res.status(200).json({
      message: `Contact with ID: ${ id } successfully deleted!`,
    })
  } catch (error) {
    if (error.message.includes("Cast to ObjectId failed")) {
      error.status = 404
    }
    next(error)
  }
}

module.exports = removeContactById;