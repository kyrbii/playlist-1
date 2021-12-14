const logger = require("../utils/logger.js");

const happySongs = {
  title: "Happy songs",
  songs: [
    {
      title: "Happy",
      artist: "Pharrell Williams",
    },
    {
      title: "Get Lucky",
      artist: "Daft Punk",
    },
    {
      title: "Don’t Worry, Be Happy",
      artist: "Bobby McFerrin",
    },
  ],
};

const iconicSongs = {
  title: "Iconic songs",
  songs: [
    {
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
    },
    {
      title: "Imagine",
      artist: "John lennon",
    },
  ],
};

const playlistCollection = [happySongs, iconicSongs];

module.exports = playlistCollection;