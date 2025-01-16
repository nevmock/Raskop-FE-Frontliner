import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-main text-white">
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
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm font-medium mt-6 md:mt-0">
            <li>
              <Link href="/" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <hr className="my-6 border-gray-400" />
        <div className="text-center text-sm">
          <p>
            © 2024{' '}
            <Link href="/" className="hover:underline font-bold">
              Rasa Kopi
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
