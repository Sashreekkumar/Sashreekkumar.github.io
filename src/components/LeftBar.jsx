export default function LeftBar() {
  return (
    <aside className="hidden lg:flex justify-end py-16 pr-12">
      <div className="sticky top-24 flex flex-col items-center w-48">
        
        <div className="w-48 h-48 rounded-full shadow-xl overflow-hidden">
          <img
            src="/assets/pfp.jpeg"
            alt="profile"
            className="w-full h-full object-cover object-[75%_25%] scale-[1.35]"
          />
        </div>

        <div className="flex space-x-6 mt-6 text-slate-500">
          {/* Replace with your SVG icons exactly as-is */}
          <a href="https://x.com/sashreekkumar" target="_blank" rel="noreferrer" className="hover:text-[#387ed1]">
            X
          </a>
          <a href="https://linkedin.com/in/sashreek-kumar" target="_blank" rel="noreferrer" className="hover:text-[#387ed1]">
            LinkedIn
          </a>
          <a href="https://github.com/Sashreekkumar" target="_blank" rel="noreferrer" className="hover:text-[#387ed1]">
            GitHub
          </a>
        </div>

      </div>
    </aside>
  );
}