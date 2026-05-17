require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videoRoutes");
const youtubeRoutes = require("./routes/youtubeRoutes");

const app = express();

// ── Middleware ──────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ─────────────────────────────────
app.use("/api", videoRoutes);
app.use("/api/youtube", youtubeRoutes);

// ── Health check ───────────────────────────
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Golu Videography API is running 🎬" });
});

// ── Start Server First, then connect DB ────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB (non-blocking — YouTube routes work even without DB)
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.warn("⚠️ MongoDB connection failed (YouTube routes still work):", err.message));
}