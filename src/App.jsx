// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Blogs from "./pages/blogs.jsx";
import Projects from "./pages/projects.jsx";
// import Paper_Implementations from "./pages/paper_implementations.jsx";

import "./index.css";

import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}