import LeftBar from "../components/LeftBar";
import About from "../components/About";
import Experience from "../components/Experience";
import DownloadResume from "../components/downloadbutton";

// desktop_layout.jsx
export default function DesktopLayout() {
  return (
    <div className="hidden lg:grid lg:grid-cols-[22.5%_55%_22.5%]">
      <LeftBar />
      <main className="w-full px-6">
        <About />
        <DownloadResume />
        <Experience />
      </main>
      <div />
    </div>
  );
}