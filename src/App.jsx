import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Blogs from "./pages/blogs.jsx";
import Projects from "./pages/projects.jsx";
import Paper_Implementations from "./pages/paper_implementations.jsx";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route
          path="/paper_implementations"
          element={<Paper_Implementations />}
        />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}