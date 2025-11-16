import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TalentBooking from "./pages/TalentBooking";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Education from "./pages/Education";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <>
        {/* 🌍 Global SEO (default metadata for the whole site) */}
        <Helmet>
          <title>Luxcity</title>

          <meta
            name="description"
            content="Luxcity: premium services in events, modeling, talent training, luxury fashion, travel experiences, community empowerment and modern education programs."
          />

          <meta
            name="keywords"
            content="Luxcity, events in Kenya, modeling agency, fashion, jewelry, travel tours, talent academy, education, training courses, Kenya events"
          />

          {/* Open Graph (Facebook, Instagram, WhatsApp preview) */}
          <meta property="og:title" content="Luxcity" />
          <meta
            property="og:description"
            content="Experience premium events, talent development, fashion, travel, and education with Luxcity."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Luxcity" />
          <meta property="og:locale" content="en_KE" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />

          {/* Ensures mobile responsiveness */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <div className="relative min-h-screen bg-[#151E3D]">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talent" element={<TalentBooking />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Services />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
