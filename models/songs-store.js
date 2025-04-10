const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();
const logger = require("../utils/logger.js");

const songStore = {
  async getSongsForPlayList(playListId) {
    const query = 'SELECT * FROM playlist2_songs WHERE playlist_id=$1';
    const values = [playListId];
    try {
      let result = await dataStoreClient.query(query, values);
      return result.rows;
    } catch (e) {
      logger.error("Error fetching songs for playlist" ,e);
    }
  },
  async removeSong(songId) { 
    const query = 'DELETE FROM playlist2_songs WHERE id=$1'; 
    const values = [songId]; 
    try { 
        await dataStoreClient.query(query, values); 
    } catch (e) { 
        logger.error("Unable to remove song from playlist", e); 
    }; 
  }, 

};

module.exports = songStore;
