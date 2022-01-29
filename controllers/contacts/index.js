const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeContactById = require('./removeContactById');
const updateContactById = require('./updateContactById');
const updateFavoriteContact = require('./updateFavoriteContact');


module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    removeContactById,
    updateContactById,
    updateFavoriteContact
}