require("dotenv").config();

const { HTTP_PORT, STATIC_FOLDER } = process.env;

module.exports = {
  HTTP_PORT,
  STATIC_FOLDER,
};
