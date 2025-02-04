"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
    setMenu([...menu, { name: "", price: 0, quantity: "" }]); // Default quantity kosong
  };

  const removeMenuItem = (index) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="py-10">
      <Card>
        <CardHeader>
          <CardTitle>Formulir Reservasi</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
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
                <div className="space-y-4">
                  {menu.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap items-center justify-between gap-4 border-b pb-2 px-2"
                    >
                      {/* Pilih Menu */}
                      <div className="w-full sm:w-1/3">
                        <Label className="text-sm font-semibold">Menu</Label>
                        <Select
                          value={item.name}
                          onValueChange={(value) =>
                            handleMenuChange(index, "name", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Menu" />
                          </SelectTrigger>
                          <SelectContent>
                            {menuOptions.map((option) => (
                              <SelectItem key={option.id} value={option.name}>
                                {option.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Harga (otomatis) */}
                      <div className="w-1/2 sm:w-1/3 text-center">
                        <Label className="text-sm font-semibold">Harga</Label>
                        <p className="font-bold text-lg">
                          Rp {item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Input Quantity */}
                      <div className="w-1/2 sm:w-1/4 text-center">
                        <Label className="text-sm font-semibold">Jumlah</Label>
                        <Input
                          type="number"
                          min="0"
                          value={item.quantity}
                          placeholder="Qty"
                          onChange={(e) =>
                            handleMenuChange(index, "quantity", e.target.value)
                          }
                          className="text-center no-spinner"
                        />
                      </div>

                      {/* Hapus Item */}
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => removeMenuItem(index)}
                        className="mt-2 sm:mt-5"
                      >
                        X
                      </Button>
                    </div>
                  ))}
                </div>
                <Button type="button" className="mt-4" onClick={addMenuItem}>
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

              {/* Submit Button */}
              <div className="text-right">
                <Button type="submit">Pesan</Button>
              </div>
            </div>
          </form>

          {/* Total & DP */}
          {formData.total > 0 && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">
                Total: Rp {formData.total.toLocaleString()}
              </p>
              <p className="font-semibold">
                DP (50%): Rp {formData.dp.toLocaleString()}
              </p>
              <Button className="mt-2 w-full" onClick={() => {}}>
                Bayar Sekarang
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;
