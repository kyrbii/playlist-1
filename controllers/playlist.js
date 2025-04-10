const logger = require('../utils/logger'); 
const playlistStore = require('../models/playlist-store.js'); 
const songStore = require('../models/songs-store.js');
 
const playlist = { 
    async index(request, response) { 
        const playlistID = request.params.id;
        const playlist = await playlistStore.getPlaylists(playlistID);
        const songs = await songStore.getSongsForPlayList(playlistID);
        logger.info('Playlist id = ' + playlistID); 
        const viewData = { 
            title: 'Playlist',
            playlist: playlist,
            songs: songs
        }; 
        response.render('playlist', viewData); 
    },
    async deleteSong(request, response) { 
        const playlistId = request.params.playlistID; 
        const songId = request.params.songID; 
        logger.debug(`Deleting Song ${songId} from Playlist ${playlistId}`); 
        await songStore.removeSong(songId); 
        response.redirect("/playlist/" + playlistId); 
    },
}; 
 
module.exports = playlist; 
