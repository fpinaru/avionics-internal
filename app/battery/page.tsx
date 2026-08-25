import Image from "next/image";

export default function BatteryPage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-4xl font-bold">
        Battery
      </h1>

      <p className="mt-4 text-lg">
        Explore the battery system and how it provides electrical power
        to the rocket's avionics systems during flight.
      </p>

      <div className="relative mt-10 h-[70vh] w-full">
        <Image
          src="/hardware/battery.png"
          alt="Battery System"
          fill
          className="object-contain"
          priority
        />
      </div>

    </main>
  );
}