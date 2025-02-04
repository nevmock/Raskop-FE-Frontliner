import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-main text-white-broken">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Logo dan tulisan */}
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="assets/logo/Rasakopi-logo.png"
              alt="Logo Rasa Kopi"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">RASA KOPI</span>
          </div>
          {/* Copyright Section */}
          <div className="text-center flex flex-wrap justify-center md:justify-end space-x-6 text-sm font-medium mt-6 md:mt-0">
            <p>© {currentYear} Rasa Kopi . All Rights Reserved.</p>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
      </div>
    </footer>
  );
};

export default Footer;
