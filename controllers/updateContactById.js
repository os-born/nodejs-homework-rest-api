const { NotFound, BadRequest } = require("http-errors");

const { Contact,
  joiContactUpdateSchema,
} = require("../models");

const updateContactById = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const { error } = await joiContactUpdateSchema.validateAsync(req.body)
    if (error) {
      throw new BadRequest(error.message);
    }
    const updateStatusContact = await Contact.findByIdAndUpdate(id, req.body, {new: true})
    if (!updateStatusContact) {
      throw NotFound(`Contact with ID: ${id} not found!`)
    }
    res.status(200).json({
      message: `Contact with ID: ${ id } successfully updated!`,
      data: updateStatusContact
    })
  } catch (error) {
    if (error.message.includes("is required")) {
      error.status = 400
      error.message = "missing required fields!"
    }

    if (error.message.includes("Cast to ObjectId failed")) {
      error.status = 404
    }

    next(error)
  }
}

module.exports = updateContactById;