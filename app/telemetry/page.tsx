import Image from "next/image";
export default function TelemetryPage(){
  return(
    <main className="min-h-screen p-10">

      <h1 className="text-4xl font-bold">
        Telemetry
      </h1>

      <p className="mt-4 text-lg">
        Explore the telemetry system and how flight data is transmitted
        between the rocket and the ground station.
      </p>

      <div className="relative mt-10 h-[70vh] w-full">
        <Image
          src="/hardware/telemetry.png"
          alt="Telemetry System"
          fill
          className="object-contain"
          priority
        />
      </div>

    </main>
  );
}
