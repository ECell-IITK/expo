import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import bgImage from "../src/assets/images/expo_bg.jpg"; 

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== STATIC BACKGROUND IMAGE ===== */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* ===== DARK OVERLAY ===== */}
      <div className="fixed inset-0 -z-10 bg-black/60" />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
