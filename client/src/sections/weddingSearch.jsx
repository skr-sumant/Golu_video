import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Heart, Play, User, Sparkles, Loader2, Film, ChevronDown, ChevronUp } from "lucide-react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000") + "/api/youtube";

const WeddingFilms = () => {
  const [results, setResults] = useState([]);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");
  const [expandedPlaylist, setExpandedPlaylist] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!name1 && !name2) {
      setError("Please enter at least one name to search");
      return;
    }

    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const params = {};
      if (name1.trim()) params.name1 = name1.trim();
      if (name2.trim()) params.name2 = name2.trim();
      if (weddingDate) params.weddingDate = weddingDate;

      const res = await axios.get(`${API_BASE}/search`, { params });
      setResults(res.data.results);

      // Auto-expand the first playlist
      if (res.data.results.length > 0) {
        setExpandedPlaylist(res.data.results[0].playlistId);
      }
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("Something went wrong. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setName1("");
    setName2("");
    setWeddingDate("");
    setResults([]);
    setSearched(false);
    setError("");
    setExpandedPlaylist(null);
  };

  return (
    <section id="search" className="py-20 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Love Story
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Enter your name and your partner's name to find your wedding playlist from our YouTube channel.
          </motion.p>
        </div>

        {/* Search Form */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                {/* Your Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <User size={14} className="text-indigo-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul"
                    className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                  />
                </div>

                {/* Partner Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Heart size={14} className="text-pink-400" />
                    Partner's Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priya"
                    className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                  />
                </div>

                {/* Wedding Date */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Calendar size={14} className="text-purple-400" />
                    Date of Marriage
                  </label>
                  <input
                    type="date"
                    className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all [color-scheme:dark]"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Find My Wedding Film
                    </>
                  )}
                </button>

                {(name1 || name2 || weddingDate) && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-gray-400 border border-white/10 rounded-xl hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Error */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center mt-4 text-sm"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </div>
        </motion.form>

        {/* Results — Playlists with videos */}
        <AnimatePresence>
          {results.map((playlist, pIndex) => (
            <motion.div
              key={playlist.playlistId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: pIndex * 0.1 }}
              className="mb-10"
            >
              {/* Playlist Header */}
              <button
                onClick={() =>
                  setExpandedPlaylist(
                    expandedPlaylist === playlist.playlistId ? null : playlist.playlistId
                  )
                }
                className="w-full flex items-center justify-between bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <Film className="text-indigo-400" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {playlist.playlistTitle}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {playlist.videoCount} video{playlist.videoCount !== 1 ? "s" : ""} • Uploaded{" "}
                      {new Date(playlist.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-indigo-400 transition-colors">
                  {expandedPlaylist === playlist.playlistId ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {/* Playlist Videos */}
              <AnimatePresence>
                {expandedPlaylist === playlist.playlistId && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {playlist.videos.map((video, vIndex) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: vIndex * 0.05 }}
                          key={video.videoId}
                          className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
                          onMouseEnter={() => setHoveredId(video.videoId)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          {/* Thumbnail / Video */}
                          <div className="relative h-52 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {hoveredId === video.videoId ? (
                              <iframe
                                className="w-full h-full object-cover scale-105 transition-transform duration-700"
                                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0`}
                                title={video.title}
                                allow="autoplay"
                                allowFullScreen
                              />
                            ) : (
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            )}

                            {/* Play overlay */}
                            <div
                              className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${
                                hoveredId === video.videoId ? "opacity-0" : "opacity-100"
                              }`}
                            >
                              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                <Play className="text-white fill-white ml-1" size={22} />
                              </div>
                            </div>

                            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 text-indigo-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                              <Heart size={12} className="fill-indigo-400 text-indigo-400" />
                              <span>Wedding Film</span>
                            </div>
                          </div>

                          <div className="p-5 flex flex-col flex-grow">
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                              {video.title}
                            </h4>

                            <a
                              href={`https://www.youtube.com/watch?v=${video.videoId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors pt-3 border-t border-white/5"
                            >
                              <Play size={14} />
                              Watch on YouTube
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* No results */}
        {results.length === 0 && searched && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
              <Film className="text-gray-600" size={32} />
            </div>
            <p className="text-gray-400 text-xl mb-2">No wedding films found</p>
            <p className="text-gray-600 text-sm">
              We couldn't find a playlist matching those names. Please check the spelling or contact us.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WeddingFilms;