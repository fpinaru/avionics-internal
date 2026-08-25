import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        Space Concordia Avionics
      </h1>

      <p className="mt-4 text-lg">
        Internal onboarding and technical documentation for new Avionics members.
      </p>
     <div className="mt-10 flex justify-center">
       <Image
          src="/hardware/rocket.png"
          alt="Space Concordia Rocket"
          width={500}
          height={1000}
          className="object-contain"
          priority
        />
        </div>
      
    </main>
  );
}