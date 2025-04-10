var pg = require("pg"); 
const logger = require("../utils/logger.js"); 

const conString = process.env.DB_CON_STRING; 

const dbConfig = { 
  connectionString: conString, 
  ssl: { rejectUnauthorized: false } 
} 

if (conString == undefined) { 
  logger.error("ERROR: environment variable DB_CON_STRING not set."); 
  process.exit(1); 
} 

let dbClient = null; 

const dataStore = { 
  getDataStore() { 
    if (dbClient !== null) { 
      return dbClient; 
    } else { 
      dbClient = new pg.Client(dbConfig); 
      dbClient.connect(); 
      return dbClient; 
    } 
  }, 
  async endConnection() { 
    await dbClient.end(); 
  } 
} 

module.exports = dataStore; 
