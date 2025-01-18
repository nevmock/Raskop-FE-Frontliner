'use client';

import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto my-20 px-4 -mt-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Description */}
        <div className="mr-0 lg:mr-20">
          <h1 className="text-5xl font-extrabold text-green-main">
            <span className="bg-green-main text-white-broken px-3">RASA</span>
            <span className="bg-[#E08756] text-white-broken px-3">KOPI</span>
          </h1>
          <p className="mt-8 text-md text-gray-700 text-justify">
            Selamat datang di kedai RASA KOPI, tempat di mana setiap tegukan
            membawa kenangan dan sentuhan bermakna. Berdiri sejak tahun 2019,
            RASA KOPI mempersembahkan kehangatan kopi dalam suasana yang santai
            dan penuh kenangan.
          </p>
          <p className="mt-8 text-md text-gray-700 text-justify">
            Terletak di Perumahan Palem 1 Residence, Dayeuhkolot, Bandung, kami
            dengan bangga menjadi bagian dari komunitas yang berkembang pesat di
            sekitar Telkom University. Berawal dari hasrat untuk menciptakan
            tempat yang bukan hanya sekadar kedai kopi, tetapi juga menjadi
            panggung bagi pengalaman yang mendalam. Dengan kopi sebagai
            pusatnya, kami merintis perjalanan kami untuk memberikan lebih dari
            sekadar minuman; kami menciptakan kenangan yang tak terlupakan.
          </p>
        </div>

        {/* Google Maps */}
        <div className="mt-8 md:mt-8 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31682.882071540047!2d107.635867!3d-6.966758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9fd20a4233f%3A0xfd1fc825bbaf1da2!2sRasa%20Kopi!5e0!3m2!1sen!2sus!4v1732360289551!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Rasa Kopi"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
