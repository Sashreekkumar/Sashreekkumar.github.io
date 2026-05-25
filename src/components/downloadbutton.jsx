export default function DownloadResume() {
  return (
    <div className="mt-4 mb-12 ml-5">
      <a
        href="https://drive.google.com/uc?export=download&id=17BRQr1Z4NAVs_Zw9G3toJHe8me8Qmz70"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2
          px-5 py-3
          rounded-lg
          bg-blue-600
          text-white
          text-sm font-medium
          border border-blue-600
          transition-all duration-200
          hover:bg-blue-700
          hover:border-blue-700
          hover:translate-y-[-1px]
        "
      >
        <svg
          className="w-4 h-4"
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

        <span>Download Resume</span>
      </a>
    </div>
  );
}