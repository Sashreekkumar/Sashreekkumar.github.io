export default function About() {
  return (
    <section id="about" className="bg-slate-50 pt-16 pb-4">
      <div className="px-6">

        {/* Mobile Profile (only visible on small screens) */}
        <div className="lg:hidden flex flex-col items-center mb-12">
          <div className="w-48 h-48 rounded-full shadow-xl overflow-hidden">
            <img
              src="/assets/pfp.jpeg"
              alt="profile"
              className="w-full h-full object-cover object-[75%_25%] scale-[1.35]"
            />
          </div>

          <div className="flex space-x-6 mt-6 text-slate-500">
            <a href="https://x.com/sashreekkumar">X</a>
            <a href="https://linkedin.com/in/sashreek-kumar">LinkedIn</a>
            <a href="https://github.com/Sashreekkumar">GitHub</a>
          </div>
        </div>

        <div className="text-slate-700 leading-relaxed">
          <h2 className="text-2xl text-slate-900 mb-6">About</h2>

          <p className="mb-6">
            {/* your existing paragraph 그대로 */}
          </p>

          <p className="mb-6">
            {/* second paragraph */}
          </p>

          <p className="mb-6">
            {/* third paragraph */}
          </p>

        </div>
      </div>
    </section>
  );
}