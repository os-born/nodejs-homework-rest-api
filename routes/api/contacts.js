const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers');
const { ctrlWrapper } = require('../../middlewares');
const { validation } = require('../../middlewares');
const {
  joiContactAddSchema,
  joiContactUpdateSchema,
  joiContactUpdateIsFavoriteSchema
} = require('../../models/')

router.get('/', ctrlWrapper(ctrl.getAllContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', validation(joiContactAddSchema), ctrlWrapper(ctrl.addContact));

router.patch('/:id', validation(joiContactUpdateSchema), ctrlWrapper(ctrl.updateContactById));

router.patch('/:id/favorite', validation(joiContactUpdateIsFavoriteSchema), ctrlWrapper(ctrl.updateFavoriteContact));

router.delete('/:id', ctrlWrapper(ctrl.removeContactById));

module.exports = router