const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    brideName: {
      type: String,
      required: [true, "Bride name is required"],
      trim: true,
    },
    groomName: {
      type: String,
      required: [true, "Groom name is required"],
      trim: true,
    },
    weddingDate: {
      type: String,
      required: [true, "Wedding date is required"],
    },
    videoId: {
      type: String,
      required: [true, "YouTube video ID is required"],
    },
    title: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: String,
      default: "",
    },
    playlistId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Create a text index for efficient searching
videoSchema.index({ brideName: "text", groomName: "text" });

module.exports = mongoose.model("Video", videoSchema);