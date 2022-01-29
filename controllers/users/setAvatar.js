const path = require("path");
const fs = require("fs").promises;
const { User } = require("../../models");

const setAvatar = async (req, res, next) => {
  const { _id: id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  try {
    const uploadDir = path.resolve("public/avatars");
    const [ext] = originalname.split(".").reverse();
    const avatarFileName = `${id}.${ext}`;
    const avatarFilePath = path.join(uploadDir, avatarFileName);
    await fs.rename(tempUpload, avatarFilePath);
    const avatarURL = `/avatars/${avatarFileName}`;
    await User.findByIdAndUpdate(id, { avatarURL });

    res.status(200).json({
      "Content-Type": "application/json",
      ResponseBody: {
        avatarURL: avatarURL,
      },
    });
  } catch (error) {
    res.status(401).json({
      "Content-Type": "application/json",
      ResponseBody: {
        message: "Not authorized!",
      },
    });
  }
};

module.exports = setAvatar;
