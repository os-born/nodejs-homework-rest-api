const { Contact } = require("./contact");
const { joiContactAddSchema } = require("./contact");
const { joiContactUpdateSchema } = require("./contact");
const { joiContactUpdateIsFavoriteSchema } = require("./contact");

const {User} = require("./user");

module.exports = {
    Contact,
    joiContactAddSchema,
    joiContactUpdateSchema,
    joiContactUpdateIsFavoriteSchema,

    User
};