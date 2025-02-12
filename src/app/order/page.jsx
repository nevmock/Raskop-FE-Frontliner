import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import GalleryGrid from "@/components/order/GalleryGrid";
import OrderForm from "@/components/order/OrderForm";
import GeneralFacilities from "@/components/order/GeneralFacilities";
import TableInfo from "@/components/order/TableInfo";

// Static paths for dynamic routes
export async function generateStaticParams() {
  const ids = ["1", "2", "3", "4", "5", "6"];
  return ids.map((id) => ({
    id,
  }));
}

// Data dummy
const tableDetails = {
  1: {
    tableNumber: "1",
    category: "Indoors",
    chairs: 3,
    sofas: 2,
    tables: 3,
    people: 6,
    description:
      "Hello, welcome to our coffee shop. We provide a cozy place for you to hang out with your friends or family. We have a variety of coffee and snacks that you can enjoy.",
  },
  2: {
    tableNumber: "2",
    category: "Outdoors",
    chairs: 4,
    sofas: 3,
    tables: 2,
    people: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

const galleryImages = {
  1: [
    "assets/images/tables/table-number-1.png",
    "assets/images/tables/table-number-2.png",
    "assets/images/tables/table-number-3.png",
    "assets/images/tables/table-number-4.png",
    "assets/images/tables/table-number-5.png",
  ],
  2: [
    "assets/images/tables/table-number-1.png",
    "assets/images/tables/table-number-2.png",
    "assets/images/tables/table-number-3.png",
    "assets/images/tables/table-number-4.png",
    "assets/images/tables/table-number-5.png",
  ],
};
const coffeeShopFacilities = [
  { icon: "☕", name: "Kopi Spesial" },
  { icon: "📶", name: "Wi-Fi Gratis" },
  { icon: "🔌", name: "Colokan Listrik" },
  { icon: "🎶", name: "Musik" },
  { icon: "🌿", name: "Tempat Duduk Outdoor/Indoor" },
  { icon: "🚻", name: "Toilet" },
];
const orders = [
  {
    name: "Orang 1",
    items: [
      { name: "Kopi Americano", qty: 2, price: 20000 },
      { name: "Croissant", qty: 1, price: 30000 },
    ],
  },
  {
    name: "Orang 2",
    items: [
      { name: "Latte", qty: 1, price: 25000 },
      { name: "Sandwich", qty: 2, price: 40000 },
    ],
  },
];

const OrderPage = ({ params }) => {
  const { id } = params;
  const images = galleryImages[id] || galleryImages[1];
  const tableData = tableDetails[id] || tableDetails[1];

  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white-broken min-h-screen">
        <div className="max-w-screen-2xl mx-auto p-6">
          {/* Gallery Section */}
          <GalleryGrid images={images} />

          {/* Table Info Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TableInfo
              tableNumber={tableData.tableNumber}
              category={tableData.category}
              chairs={tableData.chairs}
              sofas={tableData.sofas}
              tables={tableData.tables}
              people={tableData.people}
              description={tableData.description}
            />
            {/* Facilities Section */}
            <GeneralFacilities
              title="Layanan Umum"
              facilities={coffeeShopFacilities}
            />
          </div>

          {/* Order Form Section */}
          <OrderForm orders={orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
