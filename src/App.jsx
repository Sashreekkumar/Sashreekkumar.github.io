import Navbar from "./components/Navbar";
import Layout from "./layouts/home_layout.jsx";
import "./index.css";

function App() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-800">
            <Navbar />
           <Layout />
        </div>
    );
}

export default App;