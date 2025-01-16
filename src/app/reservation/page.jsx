"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

const Reservation = () => {


    return (
        <div>
            <Navbar/>
            <div className="relative w-full h-[80vh] md:h-screen -mb-24 md:-mb-36 -mt-16 md:-mt-24">
                <Image
                    src="/assets/images/bg-raskop.png"
                    alt="Background"
                    layout="fill"
                    objectFit="contain"
                    priority
                    className="object-center"
                />
            </div>
            <h1>Hello world</h1>
        </div>
    );
};

export default Reservation;