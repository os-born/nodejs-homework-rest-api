const { NotFound, BadRequest } = require("http-errors");

const { Contact,
  joiContactUpdateIsFavoriteSchema,
} = require("../models");

const updateFavoriteContact = async (req, res, next) => {
  try {
    const { error } = await joiContactUpdateIsFavoriteSchema.validateAsync(req.body)
    if (error) {
      throw new BadRequest(error.message);
    }
    const { id } = req.params;
    const { favorite } = req.body

    const updatedFavoriteContact = await Contact.findByIdAndUpdate(id, { favorite }, { new: true });
    if (!updatedFavoriteContact) {
      throw NotFound();
    }
    res.json({message: `Contact with ID: ${ id } successfully updated!`,
      data: updatedFavoriteContact})
  } catch (error) {
    if (error.message.includes("is required")) {
      error.status = 400
      error.message = "missing field favorite!"
    }

    if (error.message.includes("Cast to ObjectId failed")) {
      error.status = 404
    }

    next(error)
  }
}

module.exports = updateFavoriteContact;