const axios = require("axios");

const instanceImageKitApi = axios.create({
  baseURL: "https://upload.imagekit.io/api/v1",
  auth: {
    username: process.env.IMAGEKIT_PRIVATE_KEY,
  },
});

module.exports = instanceImageKitApi;
