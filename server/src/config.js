require("dotenv").config();

const { HTTP_PORT = 5000, STATIC_FOLDER = "../../client/build" } = process.env;

module.exports = {
  HTTP_PORT,
  STATIC_FOLDER,
};
