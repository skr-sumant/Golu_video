const express = require("express");
const Video = require("../models/video");

const router = express.Router();

// ──────────────────────────────────────────
// GET /api/videos — List all videos
// ──────────────────────────────────────────
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ──────────────────────────────────────────
// GET /api/videos/search — Search by couple
// name and/or wedding date
// ──────────────────────────────────────────
router.get("/videos/search", async (req, res) => {
  try {
    const { brideName, groomName, weddingDate } = req.query;

    // Build a dynamic filter
    const filter = {};

    if (brideName) {
      filter.brideName = { $regex: brideName, $options: "i" };
    }
    if (groomName) {
      filter.groomName = { $regex: groomName, $options: "i" };
    }
    if (weddingDate) {
      filter.weddingDate = weddingDate;
    }

    // If no query params provided, return empty
    if (Object.keys(filter).length === 0) {
      return res.status(400).json({
        message:
          "Please provide at least one search parameter: brideName, groomName, or weddingDate",
      });
    }

    const videos = await Video.find(filter).sort({ createdAt: -1 });

    res.json({
      count: videos.length,
      videos,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ──────────────────────────────────────────
// POST /api/videos — Add a new video
// ──────────────────────────────────────────
router.post("/videos", async (req, res) => {
  try {
    const { brideName, groomName, weddingDate, videoId, title, thumbnail, playlistId } =
      req.body;

    const newVideo = new Video({
      brideName,
      groomName,
      weddingDate,
      videoId,
      title,
      thumbnail: thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      playlistId,
    });

    await newVideo.save();

    res.status(201).json({
      message: "Video added successfully",
      video: newVideo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ──────────────────────────────────────────
// POST /api/videos/bulk — Add multiple videos at once
// ──────────────────────────────────────────
router.post("/videos/bulk", async (req, res) => {
  try {
    const { videos } = req.body;

    if (!Array.isArray(videos) || videos.length === 0) {
      return res.status(400).json({ message: "Please provide an array of videos" });
    }

    // Auto-fill thumbnails if missing
    const processedVideos = videos.map((v) => ({
      ...v,
      thumbnail: v.thumbnail || `https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg`,
    }));

    const inserted = await Video.insertMany(processedVideos);

    res.status(201).json({
      message: `${inserted.length} videos added successfully`,
      videos: inserted,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ──────────────────────────────────────────
// DELETE /api/videos/:id — Delete a video
// ──────────────────────────────────────────
router.delete("/videos/:id", async (req, res) => {
  try {
    const deleted = await Video.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;