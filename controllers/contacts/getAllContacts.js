const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
const skip = (page - 1) * limit;

  const contacts = await Contact.find(
    { owner: req.user._id },
    "-createdAt, -updatedAt",
    { skip, limit: Number(limit) }
  );
  res.json(contacts);
};

module.exports = getAllContacts;
