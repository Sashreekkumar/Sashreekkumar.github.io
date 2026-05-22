export default function Card({ title, description, github }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-inherit no-underline"
    >
      <article
        className="
          relative
          w-full
          max-w-[340px]
          h-auto

          rounded-[0.5rem]
          overflow-hidden
          bg-white

          shadow-[0_4px_8px_rgba(169,169,169,1)]

          cursor-pointer
          transition-transform
          duration-200
          ease-in-out
          hover:scale-[1.02]
        "
      >
        <div className="p-5">
          <h3
            className="
              text-[1.1rem]
              sm:text-[1.15rem]
              font-semibold
              leading-snug
              mb-4
            "
          >
            {title}
          </h3>

          <p
            className="
              text-[0.92rem]
              text-zinc-500
              leading-relaxed
              break-words
            "
          >
            {description}
          </p>
        </div>
      </article>
    </a>
  );
}