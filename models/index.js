const { Contact } = require("./contact");
const { joiContactAddSchema } = require("./contact");
const { joiContactUpdateSchema } = require("./contact");
const { joiContactUpdateIsFavoriteSchema } = require("./contact");

const { User } = require("./user");
const { joiUserSignupSchema } = require("./user");
const { joiUserLoginSchema } = require("./user");
const { joiUserVerifySchema } = require("./user");

module.exports = {
    Contact,
    joiContactAddSchema,
    joiContactUpdateSchema,
    joiContactUpdateIsFavoriteSchema,

    User,
    joiUserSignupSchema,
    joiUserLoginSchema,
    joiUserVerifySchema
};