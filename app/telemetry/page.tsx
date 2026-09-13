import Image from "next/image";
export default function TelemetryPage(){
  return(
    <main className="min-h-screen px-10 pb-10 pt-28"> 
      <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold">
          Telemetry
      </h1>
      <p className="mt-4 text-lg">
       Communication system responsible for transmitting flight data
       between the rocket and the ground station.
      </p>
      </div>
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
