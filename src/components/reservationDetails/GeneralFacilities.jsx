import React from "react";

const GeneralFacilities = ({ title = "Layanan Umum", facilities = [] }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-2xl">{facility.icon}</span>
            <span className="text-lg text-gray-700">{facility.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralFacilities;
