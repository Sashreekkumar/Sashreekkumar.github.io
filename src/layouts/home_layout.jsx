import LeftBar from "../components/LeftBar.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Publications from "../components/Publications.jsx";

export default function Layout() {
  return (
    <div className="lg:grid lg:grid-cols-[22.5%_55%_22.5%]">
      <LeftBar/>

      <main>
        <About/>
        <Experience/>
        <Publications/>
      </main>

      <div className="hidden lg:block" />
    </div>
  );
}