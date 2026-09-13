
import Link from "next/link";
import Footer from "@/components/Footer";

const homeSections = [
  {
    image: "/images/home-1.jpg",
    label: "SECTION 01",
    title: "[Untitled]",
    text: "Placeholder text for the first homepage section.",
    href: "#",
  },
  {
    image: "/images/home-2.jpg",
    label: "SECTION 02",
    title: "[Untitled]",
    text: "Placeholder text for the second homepage section.",
    href: "#",
  },
  {
    image: "/images/home-3.jpg",
    label: "SECTION 03",
    title: "[Untitled]",
    text: "Placeholder text for the third homepage section.",
    href: "#",
  },
  {
    image: "/images/home-4.jpg",
    label: "SECTION 04",
    title: "[Untitled]",
    text: "Placeholder text for the fourth homepage section.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">

      {/* HOME SECTIONS */}
      {homeSections.map((section, index) => (
        <section
          key={index}
          className="relative h-screen w-full overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${section.image})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

          <div
  className={`relative z-10 flex h-full items-end px-8 pb-24 md:px-16 lg:px-24 ${
    index % 2 === 0 ? "justify-start" : "justify-end"
  }`}
>
  <div
    className={`max-w-xl ${
      index % 2 === 0 ? "text-left" : "text-right"
    }`}
  >
              <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                {section.label}
              </p>

              <h1 className="mt-2 text-5xl font-bold uppercase md:text-7xl">
                {section.title}
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-7 text-white/80">
                {section.text}
              </p>

              <Link
                href={section.href}
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  border-2
                  border-white
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Learn More
              </Link>
            </div>
          </div>

          {index < homeSections.length - 1 && (
            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-2xl">
              ↓
            </div>
          )}
        </section>
      ))}

      {/* LATEST NEWS */}
      <section className="bg-background px-8 py-24 text-foreground md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Updates
          </p>

          <h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">
            Latest News
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">

            <article className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                Date
              </p>

              <h3 className="mt-4 text-xl font-semibold uppercase">
                Rocket Test Update
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Short summary
              </p>
            </article>

            <article className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                Date
              </p>

              <h3 className="mt-4 text-xl font-semibold uppercase">
                New FC Revision
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Short summary
              </p>
            </article>

            <article className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                Date
              </p>

              <h3 className="mt-4 text-xl font-semibold uppercase">
                Competition Update
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Short summary
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-background px-8 py-24 text-foreground md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Calendar
          </p>

          <h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">
            Upcoming Events
          </h2>

          <div className="mt-12">

            <div className="grid gap-4 border-t border-border py-7 md:grid-cols-[150px_1fr_1fr] md:items-center">
              <p className="text-xl font-semibold uppercase">
                SEP 18
              </p>

              <h3 className="text-xl font-medium">
                Avionics Meeting
              </h3>

              <p className="text-muted md:text-right">
                Hall Building
              </p>
            </div>

            <div className="grid gap-4 border-t border-border py-7 md:grid-cols-[150px_1fr_1fr] md:items-center">
              <p className="text-xl font-semibold uppercase">
                SEP 22
              </p>

              <h3 className="text-xl font-medium">
                Hardware Workshop
              </h3>

              <p className="text-muted md:text-right">
                Space Lab
              </p>
            </div>

            <div className="grid gap-4 border-y border-border py-7 md:grid-cols-[150px_1fr_1fr] md:items-center">
              <p className="text-xl font-semibold uppercase">
                OCT 03
              </p>

              <h3 className="text-xl font-medium">
                Ground Test
              </h3>

              <p className="text-muted md:text-right">
                Location TBD
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}