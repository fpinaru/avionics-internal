"use client";

import Link from "next/link";
import {  useEffect ,useState } from "react";
import { usePathname } from "next/navigation";
import {Bebas_Neue} from "next/font/google";


const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hardwareOpen, setHardwareOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setHidden(pathname === "/" && window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  
  const closeMenu = () => {
    setMenuOpen(false);
    setHardwareOpen(false);
  };

  return (
    <>
      <nav className={`${bebasNeue.className}  fixed top-0 left-0 z-40
    flex w-full items-center justify-between
    px-8 py-6 text-foreground
    transition-transform duration-500
    ${hidden ? "-translate-y-full" : "translate-y-0"}
  `}
>

   
        {pathname === "/" ? (
  <Link
    href="/"
    className="text-[32px] uppercase tracking-wide"
  >
    Avionics
  </Link>
) : (
  <Link
    href="/"
    aria-label="Home"
    className="transition-opacity hover:opacity-60"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-7h6v7" />
    </svg>
  </Link>
)}

        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px]"
          aria-label="Open menu"
        >
          <span className="h-[2px] w-6 bg-foreground" />
          <span className="h-[2px] w-6 bg-foreground" />
          <span className="h-[2px] w-6 bg-foreground" />
        </button>
      </nav>

      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-40 bg-background/60
          transition-opacity duration-500
          ${
            menuOpen
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      <aside
        className={`
          fixed right-0 top-0 z-50
          h-screen w-[320px]
          bg-background text-foreground
          px-8 py-7
          shadow-2xl
          transform transition-transform
          duration-500 ease-in-out
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex justify-end">
          <button
            onClick={closeMenu}
            className="text-3xl font-light transition-transform duration-300 hover:rotate-90"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div  className={`${bebasNeue.className} mt-14 flex flex-col text-[18px] uppercase tracking-[0.08em]`}
>
          <div className="border-b border-border py-5">
            <button
              onClick={() => setHardwareOpen(!hardwareOpen)}
              className="flex w-full items-center justify-between text-left"
            >
              <span>Hardware</span>

              <span
                className={`
                  text-xl transition-transform duration-300
                  ${hardwareOpen ? "rotate-45" : ""}
                `}
              >
                +
              </span>
            </button>

            <div
              className={`
                grid transition-all duration-300 ease-in-out
                ${
                  hardwareOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4 pt-5 pl-4">
                  <Link
                    href="/flight-computer"
                    onClick={closeMenu}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Flight Computer
                  </Link>

                  <Link
                    href="/telemetry"
                    onClick={closeMenu}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Telemetry
                  </Link>

                  <Link
                    href="/ecc"
                    onClick={closeMenu}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    ECC
                  </Link>

                  <Link
                    href="/battery"
                    onClick={closeMenu}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Battery
                  </Link>

                  <Link
                    href="/ground-station"
                    onClick={closeMenu}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Ground Station
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/software-stack"
            onClick={closeMenu}
            className="border-b border-border py-5 transition-opacity hover:opacity-60"
          >
            Software Stack
          </Link>

          <Link
            href="/getting-started"
            onClick={closeMenu}
            className="border-b border-border py-5 transition-opacity hover:opacity-60"
          >
            Getting Started
          </Link>
        </div>
      </aside>
    </>
  );
}