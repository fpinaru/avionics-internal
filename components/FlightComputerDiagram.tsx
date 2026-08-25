"use client";

import { useState } from "react";
import Image from "next/image";

const components = {
    mcu: {
  name: "Microcontroller (MCU)",
  pages: [
    {
      title: "Microcontroller (MCU)",
      image: "/hardware/mcu.png",
      description:
        "The main processing unit of the flight computer. It executes flight software and coordinates the avionics system.",
    },
    {
      title: "How It Works",
      image: "/hardware/mcu-diagram.png",
      description:
        "The MCU contains a processor, memory, timers, GPIO, and communication peripherals that allow it to process information and interact with other hardware.",
    },
    {
      title: "In the Flight Computer",
      image: "/hardware/mcu-flow.png",
      description:
        "The MCU receives measurements from the IMU, barometer, and GPS, processes flight data, manages system states, and communicates with storage and telemetry hardware.",
    },
    {
      title: "Communication",
      image: "/hardware/mcu-communication.png",
      description:
        "The MCU communicates with avionics hardware through interfaces such as SPI, I2C, UART, GPIO, and ADC.",
    },
  ],
  protocol: "SPI / I2C / UART / GPIO",
},
    imu: {
    name: "IMU",
    pages: [
      {
        title: "IMU",
        image: "/hardware/imu.png",
        description:
          "Measures acceleration and angular velocity to determine the rocket's motion and orientation.",
      },
      {
        title: "How It Works",
        image: "/hardware/imu-diagram.png",
        description:
          "The accelerometer measures linear acceleration while the gyroscope measures angular velocity around the X, Y and Z axes.",
      },
      {
        title: "IMU in the Flight Computer",
        image: "/hardware/imu-flow.png",
        description:
          "The IMU sends sensor measurements to the microcontroller through SPI or I2C, where the data is processed by the flight software.",
      },
    ],
    protocol: "SPI / I2C",
  },

barometer: {
  name: "Barometer / Altimeter",
  pages: [
    {
      title: "Barometer / Altimeter",
      image: "/hardware/barometer.png",
      description:
        "Measures atmospheric pressure to estimate the rocket's altitude during flight.",
    },
    {
      title: "How It Works",
      image: "/hardware/barometer-diagram.png",
      description:
        "The barometer senses changes in atmospheric pressure. As the rocket climbs and pressure decreases, the flight computer converts these measurements into an altitude estimate.",
    },
    {
      title: "In the Flight Computer",
      image: "/hardware/barometer-flow.png",
      description:
        "Pressure measurements are sent to the microcontroller through SPI or I2C and used to track ascent, altitude, apogee, and descent.",
    },
    {
      title: "Implementation",
      image: "/hardware/barometer-code.png",
      description:
        "Flight software periodically reads pressure data, filters the measurements, and uses them as part of flight-state estimation.",
    },
  ],
  protocol: "SPI / I2C",
},
   gps: {
    name: "GPS Receiver",
    pages: [
      {
        title: "GPS Receiver",
        image: "/hardware/gps.png",
        description:
          "Provides position, velocity and timing information using GNSS satellite signals.",
      },
      {
        title: "How GPS Works",
        image: "/hardware/gps-diagram.png",
        description:
          "The receiver processes satellite signals and calculates Position, Velocity and Time (PVT).",
      },
      {
        title: "GPS in the Flight Computer",
        image: "/hardware/gps-flow.png",
        description:
          "GPS data is typically sent to the microcontroller through UART for navigation, tracking and telemetry.",
      },
    ],
    protocol: "UART",
  },
};
export default function FlightComputerDiagram(){
    const [selected, setSelected]=
     useState < keyof typeof components | null >(null);
     const[page, setPage] = useState(0);
     const component= selected ? components[selected] : null;
     const currentPage = component ? component.pages[page] : null;
     function openComponent(componentName: keyof typeof components){
        setSelected(componentName);
        setPage(0);
     }
    return(
        <div className= "relative max-w-5xl mx-auto">
            <div className="relative">
                <Image 
                src="/hardware/fc.png"
                alt= "Flight Computer"
                width={1200}
                height={800}
                className="w-full rounded-xl"/>

                <button 
                onClick={() => setSelected("mcu")}
                className="absolute left-[38%] top-[24%] w-5 h-5 rounded-full
                     bg-blue-500
                     ring-4 ring-blue-500/30
                     hover:scale-125 transition"
                     aria-label="MCU"/>
                      <button
          onClick={() => setSelected("imu")}
          className="absolute left-[20%] top-[41%]
                     w-5 h-5 rounded-full
                     bg-blue-500
                     ring-4 ring-blue-500/30
                     hover:scale-125 transition"
          aria-label="IMU"
        /> 
         <button
          onClick={() => setSelected("gps")}
          className="absolute left-[76%] top-[18%]
                     w-5 h-5 rounded-full
                     bg-blue-500
                     ring-4 ring-blue-500/30
                     hover:scale-125 transition"
          aria-label="GPS"
        />
        <button
          onClick={() => setSelected("barometer")}
          className="absolute left-[20%] top-[58%]
                     w-5 h-5 rounded-full
                     bg-blue-500
                     ring-4 ring-blue-500/30
                     hover:scale-125 transition"
          aria-label="Barometer"
        />
            </div>
             {component && currentPage && (
                <div
          className="
            fixed inset-0
            bg-black/50
            flex items-center justify-center
            z-50
            p-6
          "
        >
          <div
            className="
              bg-white
              rounded-2xl
              max-w-lg
              w-full
              p-6
              relative
            "
          >
            
            <button
              onClick={() => {
                setSelected(null);
                setPage(0);
              }}
              className="absolute right-4 top-4 text-xl text-gray-700"
            >
              ×
            </button>

            {/* PAGE COUNT */}
            <p className="text-sm text-gray-500">
              {page + 1} / {component.pages.length}
            </p>

            {/* IMAGE */}
            <Image
              src={currentPage.image}
              alt={currentPage.title}
              width={700}
              height={450}
              className="w-full rounded-xl mt-3"
            />

            {/* TITLE */}
            <h2 className="text-2xl text-gray-800 font-bold mt-4">
              {currentPage.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 text-gray-600">
              {currentPage.description}
            </p>

            {/* PROTOCOL */}
            <p className="mt-4 text-gray-700 font-bold">
              Protocol: {component.protocol}
            </p>

            {/* CAROUSEL CONTROLS */}
            <div className="flex items-center justify-between mt-6">

              {/* PREVIOUS */}
              <button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 0}
                className="
                  px-4 py-2
                  border
                  rounded-lg
                  text-gray-700
                  disabled:opacity-30
                "
              >
                ←
              </button>

              {/* DOTS */}
              <div className="flex gap-2">
                {component.pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index)}
                    className={`
                      w-2.5 h-2.5
                      rounded-full
                      ${
                        page === index
                          ? "bg-black"
                          : "bg-gray-300"
                      }
                    `}
                    aria-label={`Page ${index + 1}`}
                  />
                ))}
              </div>

              {/* NEXT */}
              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={page === component.pages.length - 1}
                className="
                  px-4 py-2
                  border
                  rounded-lg
                  text-gray-700
                  disabled:opacity-30
                "
              >
                →
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}