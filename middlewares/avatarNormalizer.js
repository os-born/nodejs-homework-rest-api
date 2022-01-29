const Jimp = require("Jimp");

const avatarNormalizer = async (req, res, next) => {
  try {
    const { path: tempUpload } = req.file;
    await Jimp.read(`${tempUpload}`, (err, avatar) => {
      if (err) throw err;
      avatar.resize(250, 250).write(`${tempUpload}`);
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = avatarNormalizer;
