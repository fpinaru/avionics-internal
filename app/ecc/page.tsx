import Image from "next/image";

export default function ECCPage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-4xl font-bold">
        ECC - Electrical Control & Communications 
      </h1>
      <p className="mt-4 text-lg">
        ECC manages electrical control and communication between different avionics systems.
        It connects hardware, handles signals/data, and helps different subsystems communicate reliably.
      </p>

      <div className="relative mt-10 h-[70vh] w-full">
        <Image
          src="/hardware/ecc.png"
          alt="ECC System"
          fill
          className="object-contain"
          priority
        />
      </div>

    </main>
  );
}