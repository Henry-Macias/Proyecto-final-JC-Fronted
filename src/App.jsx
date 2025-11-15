import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Games from "./pages/Games/Games.jsx";
import AddGame from "./pages/AddGame/AddGame.jsx";
import Reviews from "./pages/reviews/Reviews.jsx";
import AddReview from "./pages/addreview/AddReview.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/add" element={<AddGame />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/add" element={<AddReview />} />
      </Routes>
    </BrowserRouter>
  );
}