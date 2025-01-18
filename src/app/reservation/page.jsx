'use client';
import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import InputField from '@/components/forms/InputField';
import SelectInput from '@/components/forms/SelectInput';
import CardTable from '@/components/cards/CardTable';
import Footer from '@/components/footer/Footer';

const Reservation = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full pt-16 bg-center bg-no-repeat bg-cover bg-[url('/assets/images/bg-reservasi.jpg')] bg-gray-500 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-64">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-broken md:text-5xl lg:text-6xl">
            Reserve Your Table, Savor the Moment
          </h1>
          <p class="mb-12 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Plan your visit with ease. Choose your location, check in, and enjoy
            the taste of perfection.
          </p>

          <div class="flex flex-col space-y-4 p-5  md:px-14 gap-3 rounded-2xl md:rounded-full sm:flex-row sm:justify-center sm:space-y-0 bg-white-broken ">
            <SelectInput
              id={'preference'}
              name={'preference'}
              label={'Location preference'}
              datas={[
                { value: 'INDOOR', label: 'Indoor' },
                { value: 'OUTDOOR', label: 'Outdoor' },
              ]}
            />
            <InputField
              id={'checkIn'}
              name={'checkIn'}
              placeholder={'Add date check in'}
              label={'Check In'}
              type={'date'}
            />
            <InputField
              id={'checkOut'}
              name={'checkOut'}
              placeholder={'Add date check out'}
              label={'Check Out'}
              type={'date'}
            />
            <div className="flex items-center">
              <button className="p-[15px] rounded-full bg-green-main hover:bg-[#0e2a23] focus:ring-4 focus:outline-none focus:ring-[#29a985] ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.325 14.899L21.705 20.279C21.8941 20.4682 22.0003 20.7248 22.0002 20.9923C22.0001 21.2599 21.8937 21.5164 21.7045 21.7055C21.5153 21.8946 21.2587 22.0008 20.9912 22.0007C20.7236 22.0006 20.4671 21.8942 20.278 21.705L14.898 16.325C13.2897 17.5707 11.2673 18.1569 9.24214 17.9643C7.21699 17.7718 5.34124 16.815 3.99649 15.2886C2.65174 13.7622 1.939 11.7808 2.00326 9.74753C2.06753 7.71427 2.90396 5.78185 4.34242 4.34339C5.78087 2.90494 7.71329 2.0685 9.74656 2.00424C11.7798 1.93998 13.7612 2.65272 15.2876 3.99747C16.814 5.34222 17.7708 7.21796 17.9634 9.24312C18.1559 11.2683 17.5697 13.2907 16.324 14.899H16.325ZM10 16C11.5913 16 13.1174 15.3678 14.2427 14.2426C15.3679 13.1174 16 11.5913 16 9.99999C16 8.40869 15.3679 6.88257 14.2427 5.75735C13.1174 4.63213 11.5913 3.99999 10 3.99999C8.40871 3.99999 6.88259 4.63213 5.75737 5.75735C4.63215 6.88257 4.00001 8.40869 4.00001 9.99999C4.00001 11.5913 4.63215 13.1174 5.75737 14.2426C6.88259 15.3678 8.40871 16 10 16Z"
                    fill="#eeebe3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-white-broken">
        <div className="container mx-auto px-4 py-16  h-full">
          <h1 className="text-4xl font-bold leading-[48px]">
            Latest on the <br /> Property Listing
          </h1>
          <div className="border-b-8 rounded-full w-[145px] border-black mt-[24px]" />
          <div className=" mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
            <CardTable
              chairs={3}
              sofa={1}
              table={2}
              people={4}
              label="Table Number I"
              location="Indoors"
              image="assets/images/tables/table-number-1.png"
              idTable="1"
            />
            <CardTable
              chairs={4}
              sofa={1}
              table={3}
              people={7}
              label="Table Number II"
              location="Outdoors"
              image="assets/images/tables/table-number-2.png"
              idTable="2"
            />
            <CardTable
              chairs={3}
              sofa={1}
              table={2}
              people={4}
              label="Table Number III"
              location="Indoors"
              image="assets/images/tables/table-number-3.png"
              idTable="3"
            />
            <CardTable
              chairs={4}
              sofa={1}
              table={2}
              people={6}
              label="Table Number IV"
              location="Indoors"
              image="assets/images/tables/table-number-4.png"
              idTable="4"
            />
            <CardTable
              chairs={3}
              sofa={1}
              table={2}
              people={4}
              label="Table Number V"
              location="Outdoors"
              image="assets/images/tables/table-number-5.png"
              idTable="5"
            />
            <CardTable
              chairs={3}
              sofa={1}
              table={2}
              people={4}
              label="Table Number VI"
              location="Indoors"
              image="assets/images/tables/table-number-6.png"
              idTable="6"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservation;
