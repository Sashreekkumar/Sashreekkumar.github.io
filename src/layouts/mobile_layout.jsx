import pfp from "../assets/pfp.jpeg";
import About from "../components/About";
import Experience from "../components/Experience";
import DownloadResume from "../components/downloadbutton";

// mobile_layout.jsx
export default function MobileLayout() {
  return (
    <div className="lg:hidden w-full px-6">
      <About />
      <DownloadResume />
      <Experience />
    </div>
  );
}