import Image from "next/image";
import React from "react";

const CardTable = ({
  label = "Table Number I",
  location = "Indoors",
  chairs = 6,
  sofa = 6,
  table = 6,
  people = 6,
  idTable = "1",
  image = "assets/images/tables/table-number-1.png",
  isBooked = false,
}) => {
  return (
    <div class="w-full max-w-sm  ">
      {/* <a href={`reservation/${idTable}`}> */}
      {/* <div className="relative w-full h-full  rounded-t-lg bg-red-500"> */}
      <Image
        width={500}
        height={500}
        src={image}
        alt="Background"
        objectFit="contain"
        priority
        className="object-cover py-5"
      />
      {/* </div> */}
      {/* </a> */}
      <div class="pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">
          {label}
        </h5>

        <div class="flex items-center mt-2.5 mb-5">
          <p className="text-[#9A9A9A] font-medium">{location}</p>
        </div>
        <div class="flex sm:flex-col md:flex-row items-center md:items-center justify-between ">
          <div class="flex items-center gap-3 ">
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21V14C5 13.45 5.196 12.9793 5.588 12.588C5.98 12.1967 6.45067 12.0007 7 12H8V10H7C6.45 10 5.97933 9.80433 5.588 9.413C5.19667 9.02167 5.00067 8.55067 5 8V5C5 4.45 5.196 3.97933 5.588 3.588C5.98 3.19667 6.45067 3.00067 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V8C19 8.55 18.8043 9.021 18.413 9.413C18.0217 9.805 17.5507 10.0007 17 10H16V12H17C17.55 12 18.021 12.196 18.413 12.588C18.805 12.98 19.0007 13.4507 19 14V21H17V18H7V21H5ZM7 8H17V5H7V8ZM10 12H14V10H10V12ZM7 16H17V14H7V16Z"
                  fill="black"
                />
              </svg>

              <p className="text-black font-medium">{chairs}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C4.71667 21 4.47933 20.904 4.288 20.712C4.09667 20.52 4.00067 20.2827 4 20V19C3.16667 19 2.45833 18.7083 1.875 18.125C1.29167 17.5417 1 16.8333 1 16V11C1 10.1667 1.29167 9.45833 1.875 8.875C2.45833 8.29167 3.16667 8 4 8V6C4 5.16667 4.29167 4.45833 4.875 3.875C5.45833 3.29167 6.16667 3 7 3H17C17.8333 3 18.5417 3.29167 19.125 3.875C19.7083 4.45833 20 5.16667 20 6V8C20.8333 8 21.5417 8.29167 22.125 8.875C22.7083 9.45833 23 10.1667 23 11V16C23 16.8333 22.7083 17.5417 22.125 18.125C21.5417 18.7083 20.8333 19 20 19V20C20 20.2833 19.904 20.521 19.712 20.713C19.52 20.905 19.2827 21.0007 19 21C18.7173 20.9993 18.48 20.9033 18.288 20.712C18.096 20.5207 18 20.2833 18 20V19H6V20C6 20.2833 5.904 20.521 5.712 20.713C5.52 20.905 5.28267 21.0007 5 21ZM4 17H20C20.2833 17 20.521 16.904 20.713 16.712C20.905 16.52 21.0007 16.2827 21 16V11C21 10.7167 20.904 10.4793 20.712 10.288C20.52 10.0967 20.2827 10.0007 20 10C19.7173 9.99933 19.48 10.0953 19.288 10.288C19.096 10.4807 19 10.718 19 11V15H5V11C5 10.7167 4.904 10.4793 4.712 10.288C4.52 10.0967 4.28267 10.0007 4 10C3.71733 9.99933 3.48 10.0953 3.288 10.288C3.096 10.4807 3 10.718 3 11V16C3 16.2833 3.096 16.521 3.288 16.713C3.48 16.905 3.71733 17.0007 4 17ZM7 13H17V11C17 10.55 17.0917 10.1417 17.275 9.775C17.4583 9.40833 17.7 9.08333 18 8.8V6C18 5.71667 17.904 5.47933 17.712 5.288C17.52 5.09667 17.2827 5.00067 17 5H7C6.71667 5 6.47933 5.096 6.288 5.288C6.09667 5.48 6.00067 5.71733 6 6V8.8C6.3 9.08333 6.54167 9.40833 6.725 9.775C6.90833 10.1417 7 10.55 7 11V13Z"
                  fill="black"
                />
              </svg>

              <p className="text-black font-medium">{sofa}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 18.725L7.5 16.25C7.65 15.8667 7.89167 15.5623 8.225 15.337C8.55833 15.1117 8.93333 14.9993 9.35 15H11V10.975C8.45 10.8917 6.31233 10.5167 4.587 9.85C2.86167 9.18333 1.99933 8.4 2 7.5C2 6.53333 2.975 5.70833 4.925 5.025C6.875 4.34167 9.23333 4 12 4C14.7833 4 17.146 4.34167 19.088 5.025C21.03 5.70833 22.0007 6.53333 22 7.5C22 8.4 21.1373 9.18333 19.412 9.85C17.6867 10.5167 15.5493 10.8917 13 10.975V15H14.65C15.05 15 15.421 15.1127 15.763 15.338C16.105 15.5633 16.3507 15.8673 16.5 16.25L17.5 18.725C17.6333 19.025 17.604 19.3127 17.412 19.588C17.22 19.8633 16.9577 20.0007 16.625 20C16.4417 20 16.275 19.95 16.125 19.85C15.975 19.75 15.8583 19.6083 15.775 19.425L14.8 17H9.2L8.225 19.425C8.14167 19.6083 8.025 19.75 7.875 19.85C7.725 19.95 7.55833 20 7.375 20C7.04167 20 6.77933 19.8623 6.588 19.587C6.39667 19.3117 6.36733 19.0243 6.5 18.725ZM12 9C13.6167 9 15.1417 8.85833 16.575 8.575C18.0083 8.29167 19.0583 7.93333 19.725 7.5C19.0583 7.06667 18.0083 6.70833 16.575 6.425C15.1417 6.14167 13.6167 6 12 6C10.3833 6 8.85833 6.14167 7.425 6.425C5.99167 6.70833 4.94167 7.06667 4.275 7.5C4.94167 7.93333 5.99167 8.29167 7.425 8.575C8.85833 8.85833 10.3833 9 12 9Z"
                  fill="black"
                />
              </svg>

              <p className="text-black font-medium">{table}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>

              <p className="text-black font-medium">{people}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span
              className={`px-3 py-1 text-sm font-medium rounded-lg ${
                isBooked ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
            >
              {isBooked ? "Booked" : "Available"}
            </span>
          </div>
          {/* <a
            href={`reservation/${idTable}`}
            class="text-white-broken bg-green-main hover:bg-[#0e2a23] focus:ring-4 focus:outline-none focus:ring-[#29a985] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Reserve Now
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardTable;
