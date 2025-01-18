import React from "react";

const OrderForm = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300 mb-5">
      <input
        type="text"
        placeholder="Name Customer"
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <div>
        <label className="block mb-2 text-gray-700 font-semibold">Orders</label>
        <div className="grid grid-cols-12 gap-2 items-center mb-4">
          <input
            type="text"
            placeholder="Menu"
            className="col-span-5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="number"
            placeholder="QTY"
            className="col-span-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-center"
          />
          <input
            type="text"
            placeholder="Price"
            readOnly
            className="col-span-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-start"
          />
          <button className="col-span-1 text-red-500 hover:text-red-700 flex justify-center">
            ✖
          </button>
        </div>
        <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 mt-2">
          ➕ Add Item
        </button>
      </div>
      <div className="mt-4 border-t pt-4 text-right">
        <span className="text-gray-700 font-semibold">Total : Rp0,00</span>
      </div>
    </div>
  );
};

export default OrderForm;
