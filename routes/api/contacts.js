const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../middlewares');
const { validation } = require('../../middlewares');
const { authenticate } = require('../../middlewares');
const {
  joiContactAddSchema,
  joiContactUpdateSchema,
  joiContactUpdateIsFavoriteSchema
} = require('../../models');

router.get('/', authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', authenticate, validation(joiContactAddSchema), ctrlWrapper(ctrl.addContact));

router.patch('/:id', authenticate, validation(joiContactUpdateSchema), ctrlWrapper(ctrl.updateContactById));

router.patch('/:id/favorite', validation(joiContactUpdateIsFavoriteSchema), ctrlWrapper(ctrl.updateFavoriteContact));

router.delete('/:id', ctrlWrapper(ctrl.removeContactById));

module.exports = router;