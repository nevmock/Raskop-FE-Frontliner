"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Location from "@/components/location/Location";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-white-broken">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full aspect-[2500/1080] mt-10 md:pt-0 ">
        <Image
          src="assets/images/bg-raskop.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Rooms Section */}
      <div className="container mx-auto mb-48 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Room Indoor */}
          <div className="bg-white-broken rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="assets/images/DALAM.jpg"
                alt="Ruangan Indoor"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                <h2 className="text-white-broken text-4xl font-bold">
                  Ruangan Indoor
                </h2>
                <Link href="reservation">
                  <button className="mt-2 bg-green-main text-white-broken w-36 h-10 rounded-lg shadow hover:bg-green-700 transition">
                    Reservasi
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4">
              <p className="text-md text-gray-600">
                Dengan kapasitas maksimal 15 - 30 orang dan bisa request untuk
                lesehan atau dengan meja dan kursi, minimal order 70% dari
                jumlah orang.
              </p>
            </div>
          </div>

          {/* Room Outdoor */}
          <div className="bg-white-broken rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="assets/images/LUAR.jpg"
                alt="Ruangan Outdoor"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                <h2 className="text-white-broken text-4xl font-bold">
                  Ruangan Outdoor
                </h2>
                <Link href="reservation">
                  <button className="mt-2 bg-green-main text-white-broken w-36 h-10 rounded-lg shadow hover:bg-green-700 transition">
                    Reservasi
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4">
              <p className="text-md text-gray-600">
                Dengan kapasitas maksimal 40 orang dengan minimal order 70% dari
                jumlah orang.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <Location />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
