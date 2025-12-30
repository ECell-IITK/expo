import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExploreStartups from "./pages/ExploreStartups";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore-startups" element={<ExploreStartups />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
