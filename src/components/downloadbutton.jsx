export default function DownloadResume() {
  return (
    <div className="mt-3 mb-12 ml-5">
      <a
        href="https://drive.google.com/file/d/17BRQr1Z4NAVs_Zw9G3toJHe8me8Qmz70/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        download="Sashreek_Kumar_Resume.pdf"
        className="inline-flex items-center text-sm border border-gray-300 px-4 py-2 rounded hover:border-[#387ed1] hover:text-[#387ed1] transition duration-200 translate-x-4"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>

        Download Resume
      </a>
    </div>
  );
}