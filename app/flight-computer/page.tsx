import FlightComputerDiagram from "@/components/FlightComputerDiagram";

export default function FlightComputerPage() {
  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Flight Computer
      </h1>

      <p className="mt-3 mb-10 text-white-600">
        Explore the main components of the rocket's flight computer.
        Click a highlighted component to learn how it works.
      </p>

      <FlightComputerDiagram />

    </main>
  );
}