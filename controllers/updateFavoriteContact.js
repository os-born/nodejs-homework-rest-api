const { NotFound } = require("http-errors");

const { Contact } = require("../models");

const updateFavoriteContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body

  const updatedFavoriteContact = await Contact.findByIdAndUpdate(id, { favorite }, { new: true });
  if (!updatedFavoriteContact) {
    throw NotFound();
  }
  res.json({message: `Field "favorite" of contact with ID: ${ id } successfully changed!`,
    data: updatedFavoriteContact})
}

module.exports = updateFavoriteContact;