import Link from "next/link";
export default function Navbar(){
        return(
          <nav className="flex items-center gap-6 border-b p-4">
            <Link href="/" className="font-bold">
            Avionics
            </Link>
         
            <Link href="/flight-computer">
            Flight Computer
            </Link>
            <Link href="/ecc">
            ECC
            </Link>
            <Link href="/telemetry">
            Telemetry
            </Link>
            <Link href="/battery">
            Battery
            </Link>
            <Link href="/ground-station">
            Ground Station
            </Link>
         </nav>
        );
    }