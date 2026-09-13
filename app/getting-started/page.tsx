export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-black px-10 pb-20 pt-28 text-white">

      <div className="mx-auto max-w-6xl">

        {/* INTRO */}
        <section>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Avionics Onboarding
          </p>

          <h1 className="mt-3 text-5xl font-bold uppercase">
            Getting Started
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Welcome to Space Concordia Avionics. This page will help you
            set up your development environment, understand the project,
            and start contributing to the team.
          </p>
        </section>


        {/* FIRST TASKS */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Onboarding
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase">
            First Tasks
          </h2>

          <div className="mt-10 border-t border-white/20">

            <div className="grid gap-3 border-b border-white/20 py-6 md:grid-cols-[80px_1fr]">
              <span className="text-white/40">01</span>
              <p>Join the Avionics communication channels</p>
            </div>

            <div className="grid gap-3 border-b border-white/20 py-6 md:grid-cols-[80px_1fr]">
              <span className="text-white/40">02</span>
              <p>Get access to the Avionics GitHub repositories</p>
            </div>

            <div className="grid gap-3 border-b border-white/20 py-6 md:grid-cols-[80px_1fr]">
              <span className="text-white/40">03</span>
              <p>Set up your development environment</p>
            </div>

            <div className="grid gap-3 border-b border-white/20 py-6 md:grid-cols-[80px_1fr]">
              <span className="text-white/40">04</span>
              <p>Read the hardware and software documentation</p>
            </div>

            <div className="grid gap-3 border-b border-white/20 py-6 md:grid-cols-[80px_1fr]">
              <span className="text-white/40">05</span>
              <p>Choose your first issue or onboarding task</p>
            </div>

          </div>
        </section>


        {/* GITHUB */}
        <section className="mt-24 border-t border-white/20 pt-12">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Development
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase">
            GitHub
          </h2>

          <p className="mt-5 max-w-2xl text-white/60">
            Explore the Avionics repositories, review the codebase,
            and contribute to current projects.
          </p>

          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-white hover:text-black"
          >
            Open GitHub ↗
          </a>
        </section>

      </div>
    </main>
  );
}