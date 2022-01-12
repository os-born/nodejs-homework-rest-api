const { Contact } = require("./contact");
const { joiContactAddSchema } = require("./contact");
const { joiContactUpdateSchema } = require("./contact");
const { joiContactUpdateIsFavoriteSchema } = require("./contact");

module.exports = {
    Contact,
    joiContactAddSchema,
    joiContactUpdateSchema,
    joiContactUpdateIsFavoriteSchema
};