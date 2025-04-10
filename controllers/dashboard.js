const logger = require("../utils/logger.js");
// const playListCollection = require("../models/playlist-store.js");
const playlistStore = require("../models/playlist-store.js");

const dashboard = {
  async index(request, response) {
    logger.info("dashboard rendering");
    const playLists = await playlistStore.getAllPlaylists();
    const viewData = {
      title: "Dashboard",
      playlists: playLists
    };
    logger.info('about to render', playLists);
    response.render("dashboard", viewData);
  },

};

module.exports = dashboard;
