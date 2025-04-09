const dataStore = require("./data-store.js"); 
const dataStoreClient = dataStore.getDataStore(); 
const logger = require("../utils/logger.js"); 

const playlistStore = { 
  async getPlaylists(id) { 
    const query = 'SELECT * FROM playlist2_playlists WHERE id=$1';
    const values = [id];
    try { 
      let result = await dataStoreClient.query(query, values); 
      return result.rows[0]; 
    } catch (e) { 
      logger.error("Error fetching all playlists", e); 
    } 
  },
  async getAllPlaylists(id) { 
    const query = 'SELECT * FROM playlist2_playlists';
    try { 
      let result = await dataStoreClient.query(query); 
      return result.rows; 
    } catch (e) { 
      logger.error("Error fetching all playlists", e); 
    } 
  }
}; 

module.exports = playlistStore; 