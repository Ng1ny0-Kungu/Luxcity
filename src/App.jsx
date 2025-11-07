import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    </Router>
  );
}

export default App;
