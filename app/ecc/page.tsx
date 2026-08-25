import Image from "next/image";

export default function ECCPage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-4xl font-bold">
        ECC
      </h1>

      <p className="mt-4 text-lg">
        Explore the ECC system and its role in the avionics architecture.
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