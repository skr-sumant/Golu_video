const express = require("express");
const {
  getAllPlaylists,
  getPlaylistVideos,
  searchPlaylists,
} = require("../services/youtube");

const router = express.Router();

const getKeys = () => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) {
    throw new Error("YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID must be set in .env");
  }
  return { apiKey, channelId };
};

// ──────────────────────────────────────────
// GET /api/youtube/playlists
// Fetch all playlists from the YouTube channel
// ──────────────────────────────────────────
router.get("/playlists", async (req, res) => {
  try {
    const { apiKey, channelId } = getKeys();
    const playlists = await getAllPlaylists(apiKey, channelId);

    const formatted = playlists.map((pl) => ({
      playlistId: pl.id,
      title: pl.snippet.title,
      description: pl.snippet.description,
      thumbnail:
        pl.snippet.thumbnails?.maxres?.url ||
        pl.snippet.thumbnails?.high?.url ||
        pl.snippet.thumbnails?.medium?.url ||
        "",
      videoCount: pl.contentDetails.itemCount,
      publishedAt: pl.snippet.publishedAt,
    }));

    res.json({ count: formatted.length, playlists: formatted });
  } catch (error) {
    console.error("YouTube playlists error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ──────────────────────────────────────────
// GET /api/youtube/search
// Search playlists by couple names & return
// matching playlists with their videos
//
// Query: ?name1=Rahul&name2=Priya&weddingDate=2025-02-14
// ──────────────────────────────────────────
router.get("/search", async (req, res) => {
  try {
    const { apiKey, channelId } = getKeys();
    const { name1, name2, weddingDate } = req.query;

    if (!name1 && !name2) {
      return res.status(400).json({
        message: "Please provide at least one name (name1 or name2)",
      });
    }

    // 1. Fetch all playlists from channel
    const allPlaylists = await getAllPlaylists(apiKey, channelId);

    // 2. Filter by couple names
    const matched = searchPlaylists(allPlaylists, name1, name2);

    if (matched.length === 0) {
      return res.json({ count: 0, results: [] });
    }

    // 3. For each matched playlist, fetch its videos
    const results = await Promise.all(
      matched.map(async (pl) => {
        const videos = await getPlaylistVideos(apiKey, pl.id);

        return {
          playlistId: pl.id,
          playlistTitle: pl.snippet.title,
          playlistDescription: pl.snippet.description,
          playlistThumbnail:
            pl.snippet.thumbnails?.maxres?.url ||
            pl.snippet.thumbnails?.high?.url ||
            pl.snippet.thumbnails?.medium?.url ||
            "",
          videoCount: pl.contentDetails.itemCount,
          publishedAt: pl.snippet.publishedAt,
          videos: videos.map((v) => ({
            videoId: v.contentDetails.videoId,
            title: v.snippet.title,
            description: v.snippet.description,
            thumbnail:
              v.snippet.thumbnails?.maxres?.url ||
              v.snippet.thumbnails?.high?.url ||
              v.snippet.thumbnails?.medium?.url ||
              "",
            publishedAt: v.snippet.publishedAt,
            position: v.snippet.position,
          })),
        };
      })
    );

    res.json({ count: results.length, results });
  } catch (error) {
    console.error("YouTube search error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ──────────────────────────────────────────
// GET /api/youtube/playlist/:playlistId
// Get all videos from a specific playlist
// ──────────────────────────────────────────
router.get("/playlist/:playlistId", async (req, res) => {
  try {
    const { apiKey } = getKeys();
    const { playlistId } = req.params;

    const videos = await getPlaylistVideos(apiKey, playlistId);

    const formatted = videos.map((v) => ({
      videoId: v.contentDetails.videoId,
      title: v.snippet.title,
      description: v.snippet.description,
      thumbnail:
        v.snippet.thumbnails?.maxres?.url ||
        v.snippet.thumbnails?.high?.url ||
        v.snippet.thumbnails?.medium?.url ||
        "",
      publishedAt: v.snippet.publishedAt,
      position: v.snippet.position,
    }));

    res.json({ count: formatted.length, videos: formatted });
  } catch (error) {
    console.error("YouTube playlist videos error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
