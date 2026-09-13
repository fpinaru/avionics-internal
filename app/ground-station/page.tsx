import Image from "next/image";

export default function GroundStationPage() {
  return (
    <main className="min-h-screen px-10 pb-10 pt-28">

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Ground Station
        </h1>

        <p className="mt-4 text-lg">
          Ground-based system responsible for receiving, processing,
          and displaying telemetry data transmitted by the rocket.
        </p>
      </div>

      <div className="relative mt-10 h-[70vh] w-full">
        <Image
          src="/hardware/ground-station.png"
          alt="Ground Station System"
          fill
          className="object-contain"
          priority
        />
      </div>

    </main>
  );
}