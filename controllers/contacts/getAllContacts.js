const { Contact } = require("../../models")

const getAllContacts = async (req, res) => {
    const contacts = await Contact.find({owner: req.user._id});
    res.json(contacts)
}

module.exports = getAllContacts;