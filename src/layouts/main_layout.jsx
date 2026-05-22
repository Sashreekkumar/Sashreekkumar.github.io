import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Navbar />
      {children}
    </div>
  );
}