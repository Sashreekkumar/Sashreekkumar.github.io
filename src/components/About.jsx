import pfp from "../assets/pfp.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 pt-16 pb-4">
      <div className="px-6">
        {/* Mobile Profile (only visible on small screens) */}
        <div className="lg:hidden flex flex-col items-center mb-12">
          <div className="w-48 h-48 rounded-full shadow-xl overflow-hidden">
            <img
              src={pfp}
              alt="profile"
              className="w-full h-full object-cover object-[75%_25%] scale-[1.35]"
            />
          </div>

          <div className="flex space-x-6 mt-6 text-slate-500">
            <a
              href="https://x.com/sashreekkumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#387ed1]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sashreek-kumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#387ed1]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/Sashreekkumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#24292e]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sashreek-kumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF6719]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/camera.crafted/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d62976]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-slate-700 leading-relaxed">
          <p className="mb-6">
            I'm currently an Electronics Engineering undergraduate at Chaitanya
            Bharathi Institute of Technology, heading into my junior year. Most
            of my work and curiosity right now revolve around AI and machine
            learning, especially the intersection of AI with healthcare and
            real-world systems.
          </p>

          <p className="mb-6">
            I previously interned at International Institute of Information
            Technology Hyderabad, where I worked on computer vision for
            healthcare applications. My work involved building a YOLO-based
            pipeline for colonoscopy polyp detection and segmentation.
          </p>

          <p className="mb-6">
            Outside academics and projects, I enjoy learning things across
            completely different domains. I’m a FIDE-rated chess player, read
            books somewhat eclectically, and generally like diving into subjects
            just because they seem interesting. I also enjoy writing, mostly
            about technical topics, books, and occasionally things that aren’t
            technical at all.
            <br />
            <span className="italic">PS: blogs coming soon.</span>
          </p>

          <p className="mb-6">
            I’m also into photography{" "}
            <a
              href="https://www.instagram.com/camera.crafted/"
              target="_blank"
              rel="noreferrer"
              className="text-[#387ed1] hover:text-purple-500 transition-colors duration-300"
            >
              (@camera.crafted)
            </a>
            , fairly active on X{" "}
            <a
              href="https://x.com/sashreekkumar"
              target="_blank"
              rel="noreferrer"
              className="text-[#387ed1] hover:text-purple-500 transition-colors duration-300"
            >
               (@sashreekkumar)
            </a>
           , and broadly interested in AI research,
            engineering, and the ideas around where the field is headed.
          </p>
        </div>
      </div>
    </section>
  );
}
