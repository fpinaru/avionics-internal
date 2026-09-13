export default function Footer() {
  return (
    <footer className="bg-black px-8 py-10 text-white">
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-wide text-white/60">

        <span>Space Concordia Avionics</span>

        <a
          href="https://spaceconcordia.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          Space Concordia
        </a>

        <a
          href="https://github.com/Space-Concordia-Rocketry/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          GitHub
        </a>

        <span>Documentation</span>
        <span>Contact</span>

      </div>
    </footer>
  );
}