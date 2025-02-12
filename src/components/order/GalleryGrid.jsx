"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GalleryGrid = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const openModal = (index) => {
    setActiveImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <img
            src={images[0]}
            alt="Main Image"
            className="w-full object-cover rounded-lg cursor-pointer"
            style={{ height: "392px" }}
            onClick={() => openModal(0)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 relative ml-0 lg:ml-2 mt-3 lg:mt-0">
          {images.slice(1, 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Secondary Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(index + 1)}
            />
          ))}
          {images.length > 4 && (
            <div
              className="relative cursor-pointer"
              onClick={() => openModal(4)}
            >
              <img
                src={images[4]}
                alt="More Photos"
                className="w-full h-48 object-cover rounded-lg blur-sm"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-lg">
                <span className="text-2xl">+{images.length - 4}</span>
                <span>More Photos</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="relative flex flex-col items-center">
            <img
              src={images[activeImage]}
              alt={`Image ${activeImage + 1}`}
              className="w-[95vw] max-w-3xl max-h-[90vh] md:max-w-4xl rounded-lg p-2 md:p-0"
            />

            {/* Dots Navigation */}
            <div className="flex space-x-2 mt-2 md:mt-3">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full bg-gray-400 transition-all",
                    index === activeImage ? "bg-white scale-125" : ""
                  )}
                />
              ))}
            </div>

            {/* Close Button */}
            <Button
              className="absolute top-4 right-4 text-black bg-black bg-opacity-50 rounded-full p-2 md:p-4 hover:bg-opacity-50 transition duration-200 ease-in-out"
              onClick={closeModal}
            >
              <div className="bg-white bg-opacity-80 hover:bg-opacity-70 p-1 md:p-2 rounded-full">
                <X className="w-6 h-6 md:w-10 md:h-10" />
              </div>
            </Button>

            {/* Prev Button */}
            <Button
              className="absolute left-4  top-1/2 transform -translate-y-1/2 text-black bg-black bg-opacity-50 rounded-full p-2 md:p-4 hover:bg-opacity-50 transition duration-200 ease-in-out"
              onClick={prevImage}
            >
              <div className="bg-white bg-opacity-80 hover:bg-opacity-70 p-1 md:p-2 rounded-full">
                <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
              </div>
            </Button>

            {/* Next Button */}
            <Button
              className="absolute right-4  top-1/2 transform -translate-y-1/2 text-black bg-black bg-opacity-50 rounded-full p-2 md:p-4 hover:bg-opacity-40 transition duration-200 ease-in-out"
              onClick={nextImage}
            >
              <div className="bg-white bg-opacity-80 hover:bg-opacity-70 p-1 md:p-2 rounded-full">
                <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
