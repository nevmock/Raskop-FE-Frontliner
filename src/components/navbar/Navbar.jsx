"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navOutside = useRef();
  const router = useRouter();
  const [settingsData, setSettingsData] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const [isLoading, setIsLoading] = useState(true);

  // handle toggle icon navbar untuk mengeluarkan menu navbar saat posisi mobile dari kiri
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  // handle toggle dropdown menu about us untuk di posisi deskstop dan mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //handle nav menu scroll ke section division
  const handleScrollToDivision = () => {
    const divisionPage = document.getElementById("divisionPage");
    if (divisionPage) {
      divisionPage.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#divisionPage", undefined, { scroll: false });
    }
    toggleNavbar();
    setIsDropdownOpen(false);
  };

  // handle nav nemu scroll ke section contact
  const scrollToContact = () => {
    const contactLink = document.getElementById("contact");
    if (contactLink) {
      contactLink.scrollIntoView({ behavior: "smooth" });
    }
    setIsClick(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navOutside.current && !navOutside.current.contains(event.target)) {
        setIsClick(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav
        ref={navOutside}
        className="fixed top-0 inset-x-0 z-50 border-b-[1px] transition-all duration-300 bg-green-main"
      >
        <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto">
          {/* Desktop menu */}
          <div className="flex items-center justify-between w-full h-full">
            <Link href="/">
              <Image
                src={`assets/logo/logo-raskop.png`}
                alt="Logo Raskop"
                width={131}
                height={72}
                responsive="true"
                className="w-[50px] h-[27px] sm:w-[70px] sm:h-[35px] md:w-[131px] md:h-[72px] cursor-pointer object-contain"
              />
            </Link>
            <div className="items-center hidden space-x-16 md:flex">
              <ul className="items-center hidden space-x-16 md:flex">
                {/* Dropdown menu di ukuran deskstop */}
                <div className="relative">
                  <button
                    className="flex flex-row items-center p-4 font-medium md:hover:underline md:hover:underline-offset-2 text-white "
                    onClick={toggleDropdown}
                  >
                    About Us
                    <svg
                      className={`ml-2 transition duration-300 ease-in-out ${
                        isDropdownOpen
                          ? "transform rotate-180 ease-in-out duration-400"
                          : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 40 40"
                    >
                      <path
                        fill="#ddd"
                        d="M4.659 11.833h30.682L20 32.167z"
                      ></path>
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute w-[230px] top-full left-0 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] rounded-[10px] bg-white">
                      <ul>
                        <li className="mx-2 mt-2">
                          <Link
                            href="/about"
                            className="block font-medium px-7 py-[5px] rounded-[10px] cursor-pointer text-[#6B6B6B] "
                            onClick={(event) => {
                              toggleNavbar();
                              setIsDropdownOpen(false);
                            }}
                          >
                            About
                          </Link>
                        </li>
                        <li className="mx-2 mt-2">
                          <div
                            className="block font-medium px-7 py-[5px] rounded-[10px] cursor-pointer text-[#6B6B6B] "
                            onClick={(event) => {
                              toggleNavbar();
                              setIsDropdownOpen(false);
                              handleScrollToDivision();
                            }}
                          >
                            Division
                          </div>
                        </li>
                        <li className="mt-2 mx-2 mb-[8px]">
                          <div
                            className="block font-medium px-7 py-[5px] rounded-[10px] cursor-pointer text-[#6B6B6B] "
                            onClick={(event) => {
                              toggleNavbar();
                              scrollToContact();
                              setIsDropdownOpen(false);
                            }}
                          >
                            Contact
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link href="/reservation">
                  <li className="font-medium p-4 md:hover:underline md:hover:underline-offset-2 text-white ">
                    Reservasi
                  </li>
                </Link>
                <Link href="/menu">
                  <li className="font-medium p-4 md:hover:underline md:hover:underline-offset-2 text-white">
                    Menu
                  </li>
                </Link>
              </ul>
            </div>
            {/* Icon Hamburger */}
            <div
              onClick={toggleNavbar}
              className="pl-24 cursor-pointer md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={18}
                viewBox="0 0 48 48"
                className="w-full h-full max-w-[22px] max-h-[18px]"
              >
                <path
                  fill="none"
                  stroke="#ddd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M7.95 11.95h32m-32 12h32m-32 12h32"
                ></path>
              </svg>
            </div>
          </div>
          {/* Mobile menu */}
          <div
            className={
              isClick
                ? "fixed w-[65%] md:hidden h-screen flex flex-col flex-start left-0 top-0 p-5 sm:p-10 ease-in duration-400 transition-all bg-green-main"
                : "fixed left-[-100%] top-0 p-10 ease-out duration-400 transition-all"
            }
          >
            <div className="flex items-center justify-start w-full">
              <div onClick={toggleNavbar} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={56}
                  height={56}
                  viewBox="0 0 24 24"
                  className="w-full h-full max-w-[56px] max-h-[56px]"
                >
                  <g fill="none" stroke="white" strokeWidth={1.5}>
                    <circle cx={12} cy={12} r={10}></circle>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m0 0l3-3m-3 3l3 3"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col h-full py-4">
              <ul className="pt-[160px]">
                {/* Dropdown menu di ukuran mobile */}
                <div className="relative">
                  <button
                    className="flex flex-row items-center  text-white"
                    onClick={toggleDropdown}
                  >
                    <p className="font-medium">About Us </p>
                    <svg
                      className={`ml-4 w-[28px] h-[14px] transition duration-300 ease-in-out  ${
                        isDropdownOpen
                          ? "transform rotate-180 ease-in-out duration-400"
                          : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 40 40"
                    >
                      <path
                        fill="white"
                        d="M4.659 11.833h30.682L20 32.167z"
                      ></path>
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="left-0 block w-40 rounded-md top-full">
                      <ul>
                        <li className="px-4 pt-1">
                          <Link
                            href="/about"
                            className="block px-4 rounded text-white"
                            onClick={(event) => {
                              toggleNavbar();
                              setIsDropdownOpen(false);
                            }}
                          >
                            About
                          </Link>
                        </li>
                        <li className="px-4 pt-1">
                          <div
                            className="block px-4 cursor-pointer rounded text-white"
                            onClick={(event) => {
                              toggleNavbar();
                              setIsDropdownOpen(false);
                              handleScrollToDivision();
                            }}
                          >
                            Division
                          </div>
                        </li>
                        <li className="px-4 pt-1 pb-2">
                          <div
                            className="block px-4 rounded cursor-pointer text-white"
                            onClick={(event) => {
                              toggleNavbar();
                              scrollToContact();
                              setIsDropdownOpen(false);
                            }}
                          >
                            Contact
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link href="/news">
                  <li
                    onClick={() => setIsClick(false)}
                    className="py-4  cursor-pointer text-white"
                  >
                    Reservasi
                  </li>
                </Link>
                <Link href="/projects">
                  <li
                    onClick={() => setIsClick(false)}
                    className=" cursor-pointer text-white"
                  >
                    Menu
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
