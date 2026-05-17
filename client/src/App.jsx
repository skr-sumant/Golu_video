import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./sections/navbar";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Carousel from "./sections/carousel";
import About from "./sections/about";
import Contact from "./sections/contact";
import Uploader from "./sections/uploader";
import Banner from "./sections/banner";
import SearchPage from "./pages/search";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
        <Navbar />

        <Routes>
          {/* Home — all sections inline */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Carousel />
                <About />
                <Banner />
                <Uploader />
                <Contact />
              </>
            }
          />

          {/* Search Page */}
          <Route path="/search" element={<SearchPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;