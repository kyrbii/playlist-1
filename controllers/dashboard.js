const logger = require("../utils/logger.js");
const playListCollection = require("../models/playlist-store.js");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Dashboard",
      playlists: playListCollection
    };
    logger.info('about to render', playListCollection);
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;
