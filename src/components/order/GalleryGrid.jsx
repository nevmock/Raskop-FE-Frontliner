"use client";
import React, { useState } from "react";

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

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <img
            src={images[0]} // Gambar utama
            alt="Main Image"
            className="w-full h-96 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(0)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 relative">
          {images.slice(1, 4).map((image, index) => (
            <img
              key={index}
              src={image} // Gambar tambahan
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
                src={images[4]} // Gambar pertama setelah 4
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
          <div className="relative">
            <img
              src={images[activeImage]}
              alt={`Image ${activeImage + 1}`}
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
