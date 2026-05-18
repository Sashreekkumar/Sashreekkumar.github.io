import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="header" className="bg-white/80 backdrop-blur-md w-full z-50 pt-4 sticky top-0">
      <div className="w-full lg:w-[55%] mx-auto px-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          
          <a href="#home" className="text-[24px] text-slate-900">
            Sashreek Kumar
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-[#387ed1] transition duration-100 text-[18px]">
              About
            </a>
            <a href="pages/blog.html" className="text-slate-600 hover:text-[#387ed1] transition duration-100 text-[18px]">
              Blog
            </a>
            <a href="pages/paper_implementations.html" className="text-slate-600 hover:text-[#387ed1] transition duration-100 text-[18px]">
              Paper Implementations
            </a>
            <a href="pages/projects.html" className="text-slate-600 hover:text-[#387ed1] transition duration-100 text-[18px]">
              Projects
            </a>
          </nav>

          <button
            id="mobile-menu-button"
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

        </div>

        <div
          id="mobile-menu"
          className={`${open ? "block" : "hidden"} md:hidden mt-4 bg-white rounded-lg shadow-md`}
        >
          <a href="#" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded-t-lg">
            About
          </a>
          <a href="pages/blog.html" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100">
            Blog
          </a>
          <a href="pages/paper_implementations.html" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100">
            Paper Implementations
          </a>
          <a href="pages/projects.html" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded-b-lg">
            Projects
          </a>
        </div>
      </div>
    </header>
  );
}