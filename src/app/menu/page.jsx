import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";

const MenuPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4">
        {/* Header */}
        <header className="text-center mt-20 mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Selamat Datang di Menu Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Temukan berbagai pilihan makanan dan minuman terbaik untuk Anda.
          </p>
        </header>

        {/* Menu Image */}
        <div className="relative w-full max-w-screen-lg mb-10">
          <Image
            src="assets/images/menu-raskop.jpeg"
            alt="Menu"
            width={800}
            height={1200}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
