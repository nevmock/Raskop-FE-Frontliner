import React from "react";

const ReservationPricing = ({ orders }) => {
  // Menghitung total harga per orang
  const calculateTotalPerPerson = (orderItems) => {
    return orderItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  // Menghitung total harga seluruh meja
  const totalTablePrice = orders.reduce(
    (total, person) => total + calculateTotalPerPerson(person.items),
    0
  );

  return (
    <div className="bg-gray-100 shadow rounded-lg p-6 pt-12 mt-6">
      <h2 className="text-xl font-bold mb-4">Total Harga Pesanan</h2>
      <hr className="border-gray-300 mb-4" />

      {/* Daftar Belanja per Orang */}
      {orders.map((person, index) => {
        const totalPerPerson = calculateTotalPerPerson(person.items);
        return (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Orang {index + 1}: Rp {totalPerPerson.toLocaleString("id-ID")}
            </h3>
            <ul className="text-gray-600">
              {person.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1">
                  {item.name} x {item.qty} = Rp{" "}
                  {(item.price * item.qty).toLocaleString("id-ID")}
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* Total Harga untuk Satu Meja */}
      <div className="text-lg font-bold text-gray-800 mt-6">
        Total: Rp {totalTablePrice.toLocaleString("id-ID")}
      </div>

      <button className="w-full bg-gray-600 text-white py-3 rounded-lg text-lg font-bold mt-6 hover:bg-gray-500">
        Bayar Sekarang
      </button>
    </div>
  );
};

export default ReservationPricing;
