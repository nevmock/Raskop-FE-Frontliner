'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu untuk mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-green-main text-white-broken shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="assets/logo/Rasakopi-logo.png"
            alt="Logo Rasa Kopi"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-semibold">RASA KOPI</span>
        </div>

        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/reservation" className="hover:underline">
              Reservasi
            </Link>
          </li>
          <li>
            <Link
              href="/assets/images/menu-raskop.jpeg"
              className="hover:underline"
              target="_blank"
            >
              Menu
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-white-broken focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-green-main text-white-broken md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="block hover:underline"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/reservation"
                className="block hover:underline"
                onClick={toggleMenu}
              >
                Reservasi
              </Link>
            </li>
            <li>
              <Link
                href="/assets/images/menu-raskop.jpeg"
                className="hover:underline"
                target="_blank"
                onClick={toggleMenu}
              >
                Menu
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
