"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CreditCard, QrCode } from "lucide-react";

const menuOptions = [
  { id: 1, name: "Espresso", price: 20000 },
  { id: 2, name: "Cappuccino", price: 30000 },
  { id: 3, name: "Latte", price: 35000 },
  { id: 4, name: "Nasi Goreng Abang-Abang", price: 35000 },
  { id: 5, name: "Mie Goreng Special", price: 30000 },
  { id: 6, name: "Ayam Geprek", price: 40000 },
  { id: 7, name: "Iced Americano", price: 25000 },
  { id: 8, name: "French Fries", price: 20000 },
  { id: 9, name: "Chicken Wings", price: 35000 },
  { id: 10, name: "Hot Chocolate", price: 30000 },
  { id: 11, name: "Matcha Latte", price: 35000 },
  { id: 12, name: "Pancake", price: 28000 },
  { id: 13, name: "Milkshake", price: 30000 },
  { id: 14, name: "Affogato", price: 32000 },
  { id: 15, name: "Smoothie Bowl", price: 38000 },
];

const OrderForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    organization: "",
    purpose: "",
    additionalRequest: "",
    orders: [],
    paymentMethod: "",
    total: 0,
    dp: 0,
  });

  const [menu, setMenu] = useState([]);
  const lastMenuRef = useRef(null); // Simpan referensi untuk elemen terakhir
  const menuListRef = useRef(null); // Simpan referensi untuk daftar menu

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (value) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleMenuChange = (index, key, value) => {
    const updatedMenu = [...menu];

    if (key === "name") {
      const selectedItem = menuOptions.find((item) => item.name === value);
      updatedMenu[index] = { ...selectedItem, quantity: "" }; // Hilangkan nilai default
    } else if (key === "quantity") {
      updatedMenu[index].quantity = value === "" ? "" : Number(value);
    }

    setMenu(updatedMenu);
  };

  const addMenuItem = () => {
    setMenu([...menu, { name: "", price: 0, quantity: "" }]);
  };

  const removeMenuItem = (index) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  // Efek untuk fokus ke item terakhir dan scroll ke bawah
  useEffect(() => {
    if (lastMenuRef.current) {
      lastMenuRef.current.focus();
    }
    if (menuListRef.current) {
      menuListRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [menu.length]);

  // Menghitung total dan DP secara otomatis setiap kali state `menu` berubah
  useEffect(() => {
    const total = menu.reduce(
      (sum, item) => sum + item.price * (item.quantity || 0),
      0
    );
    const dp = total * 0.5;

    setFormData((prev) => ({
      ...prev,
      orders: menu.filter((item) => item.quantity > 0),
      total,
      dp,
    }));
  }, [menu]);

  return (
    <div className="py-10">
      <Card>
        <CardHeader>
          <CardTitle>Formulir Reservasi</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Form tidak lagi menggunakan onSubmit karena tombol Pesan dihapus */}
          <form>
            <div className="space-y-6">
              <div>
                <Label>Nama Perwakilan</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Nama Lengkap"
                />
              </div>
              <div>
                <Label>WhatsApp</Label>
                <Input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  placeholder="+62 xxx-xxx-xxxx"
                />
              </div>
              <div>
                <Label>Asal Reservasi</Label>
                <Input
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Nama Perusahaan, Instansi, dll."
                />
              </div>
              <div>
                <Label>Tujuan Reservasi</Label>
                <Input
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder="Meeting, Gathering, dll."
                />
              </div>
              <div>
                <Label>Permintaan Tambahan</Label>
                <Input
                  name="additionalRequest"
                  value={formData.additionalRequest}
                  onChange={handleInputChange}
                  placeholder="Minta asbak, tisu, dll."
                />
              </div>

              {/* List Pemesanan */}
              <div>
                <Label>List Pemesanan</Label>
                <div className="space-y-2 overflow-y-auto max-h-80 border p-2 rounded-lg">
                  {menu.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-nowrap items-center justify-between gap-x-6 border-b pb-2 px-2 overflow-x-auto"
                    >
                      {/* Pilih Menu */}
                      <div className="w-1/3">
                        <Label className="text-xs sm:text-sm font-semibold">
                          Menu
                        </Label>
                        <Select
                          value={item.name}
                          onValueChange={(value) =>
                            handleMenuChange(index, "name", value)
                          }
                        >
                          <SelectTrigger
                            ref={index === menu.length - 1 ? lastMenuRef : null}
                            className="text-xs sm:text-sm h-9 sm:h-10 px-2"
                          >
                            <SelectValue placeholder="Pilih Menu" />
                          </SelectTrigger>
                          <SelectContent className="max-h-40 overflow-y-auto">
                            {menuOptions.map((option) => (
                              <SelectItem key={option.id} value={option.name}>
                                {option.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Harga */}
                      <div className="w-1/4 text-center">
                        <Label className="text-xs sm:text-sm font-semibold">
                          Harga
                        </Label>
                        <div className="flex items-center justify-center gap-1 font-bold text-xs sm:text-lg">
                          <span>Rp</span>
                          <span>{item.price.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Input Quantity */}
                      <div className="w-1/4 text-center">
                        <Label className="text-xs sm:text-sm font-semibold">
                          Jumlah
                        </Label>
                        <Input
                          type="number"
                          min="0"
                          value={item.quantity}
                          placeholder="Qty"
                          onChange={(e) =>
                            handleMenuChange(index, "quantity", e.target.value)
                          }
                          className="text-center text-xs sm:text-sm h-9 sm:h-10 px-2 no-spinner"
                        />
                      </div>

                      {/* Hapus Item */}
                      <div className="flex items-center">
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => removeMenuItem(index)}
                          className="w-9 h-9 sm:w-10 sm:h-10 mt-5 flex items-center justify-center text-xs"
                        >
                          X
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  className="mt-4 text-xs sm:text-sm h-9 sm:h-10 px-4"
                  onClick={addMenuItem}
                >
                  + Tambah Menu
                </Button>
              </div>

              {/* Metode Pembayaran */}
              <div className="mt-6">
                <Label>Metode Pembayaran</Label>
                <div className="flex space-x-4">
                  {/* QRIS */}
                  <Button
                    type="button"
                    onClick={() => handlePaymentChange("qris")}
                    className={`flex items-center hover:bg-gray-300 space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 ${
                      formData.paymentMethod === "qris"
                        ? "border-black bg-white text-black shadow-md ring-2 ring-black"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <QrCode className="w-6 h-6" />
                    <span>QRIS</span>
                  </Button>

                  {/* Transfer Bank */}
                  <Button
                    type="button"
                    onClick={() => handlePaymentChange("transfer")}
                    className={`flex items-center hover:bg-gray-300 space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 ${
                      formData.paymentMethod === "transfer"
                        ? "border-black bg-white text-black shadow-md ring-2 ring-black"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <CreditCard className="w-6 h-6" />
                    <span>Transfer</span>
                  </Button>
                </div>
              </div>
            </div>
          </form>

          {/* Menampilkan Total & DP beserta tombol Bayar Sekarang */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold text-lg">
              Total: Rp {formData.total.toLocaleString()}
            </p>
            <p className="font-semibold text-lg">
              DP (50%): Rp {formData.dp.toLocaleString()}
            </p>
            <Button className="mt-2 w-full" onClick={() => {}}>
              Bayar Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;
