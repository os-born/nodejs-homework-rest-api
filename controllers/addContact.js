const { Contact,
  joiContactAddSchema,
} = require("../models");

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;
  const newContact = { name, email, phone }
  try { await joiContactAddSchema.validateAsync(newContact)
    const newBody = await Contact.create(newContact)
    res.status(201).json({
      message: `New contact with name: ${newBody.name} successfully created!`,
      data: newBody
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

module.exports = addContact;