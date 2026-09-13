export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-background px-10 pb-20 pt-28 text-muted">

      <div className="mx-auto max-w-6xl">

        {/* INTRO */}
        <section>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Avionics Onboarding
          </p>

          <h1 className="mt-3 text-5xl font-bold uppercase">
            Getting Started
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Welcome to Space Concordia Avionics. This page will help you
            set up your development environment, understand the project,
            and start contributing to the team.
          </p>
        </section>


        {/* FIRST TASKS */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Onboarding
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase">
            First Tasks
          </h2>

          <div className="mt-10 border-t border-border">

            <div className="grid gap-3 border-b border-border py-6 md:grid-cols-[80px_1fr]">
              <span className="text-muted">01</span>
              <p>Join the Avionics communication channels</p>
            </div>

            <div className="grid gap-3 border-b border-border py-6 md:grid-cols-[80px_1fr]">
              <span className="text-muted">02</span>
              <p>Get access to the Avionics GitHub repositories</p>
            </div>

            <div className="grid gap-3 border-b border-border py-6 md:grid-cols-[80px_1fr]">
              <span className="text-muted">03</span>
              <p>Set up your development environment</p>
            </div>

            <div className="grid gap-3 border-b border-border py-6 md:grid-cols-[80px_1fr]">
              <span className="text-muted">04</span>
              <p>Read the hardware and software documentation</p>
            </div>

            <div className="grid gap-3 border-b border-border py-6 md:grid-cols-[80px_1fr]">
              <span className="text-muted">05</span>
              <p>Choose your first issue or onboarding task</p>
            </div>

          </div>
        </section>


        {/* GITHUB */}
        <section className="mt-24 border-t border-border pt-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Development
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase">
            GitHub
          </h2>

          <p className="mt-5 max-w-2xl text-muted">
            Explore the Avionics repositories, review the codebase,
            and contribute to current projects.
          </p>

          <a
            href="https://github.com/Space-Concordia-Rocketry/Avionics-Intro-Task"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border-2 border-border px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-white hover:text-black"
          >
            Open GitHub ↗
          </a>
        </section>

      </div>
    </main>
  );
}