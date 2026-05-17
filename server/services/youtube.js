const axios = require("axios");

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";

/**
 * Fetch ALL playlists from the channel (handles pagination)
 */
async function getAllPlaylists(apiKey, channelId) {
  const playlists = [];
  let nextPageToken = "";

  do {
    const res = await axios.get(`${YOUTUBE_API}/playlists`, {
      params: {
        part: "snippet,contentDetails",
        channelId,
        maxResults: 50,
        pageToken: nextPageToken,
        key: apiKey,
      },
    });

    playlists.push(...res.data.items);
    nextPageToken = res.data.nextPageToken || "";
  } while (nextPageToken);

  return playlists;
}

/**
 * Fetch ALL videos from a specific playlist (handles pagination)
 */
async function getPlaylistVideos(apiKey, playlistId) {
  const videos = [];
  let nextPageToken = "";

  do {
    const res = await axios.get(`${YOUTUBE_API}/playlistItems`, {
      params: {
        part: "snippet,contentDetails",
        playlistId,
        maxResults: 50,
        pageToken: nextPageToken,
        key: apiKey,
      },
    });

    videos.push(...res.data.items);
    nextPageToken = res.data.nextPageToken || "";
  } while (nextPageToken);

  return videos;
}

/**
 * Search playlists by couple names.
 * Matches if BOTH names appear in the playlist title (case-insensitive).
 * If only one name is provided, matches that single name.
 */
function searchPlaylists(playlists, name1, name2) {
  return playlists.filter((pl) => {
    const title = pl.snippet.title.toLowerCase();

    const match1 = name1 ? title.includes(name1.toLowerCase()) : true;
    const match2 = name2 ? title.includes(name2.toLowerCase()) : true;

    // At least one name must be provided
    if (!name1 && !name2) return false;

    return match1 && match2;
  });
}

module.exports = { getAllPlaylists, getPlaylistVideos, searchPlaylists };
