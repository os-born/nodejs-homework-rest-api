const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers');

router.get('/', ctrl.getAllContacts);

router.get('/:id', ctrl.getContactById);

router.post('/', ctrl.addContact);

router.patch('/:id', ctrl.updateContactById);

router.patch('/:id/favorite', ctrl.updateFavoriteContact);

router.delete('/:id', ctrl.removeContactById);


module.exports = router
