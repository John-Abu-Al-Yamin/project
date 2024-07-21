import React from "react";

import { PiUserListBold } from "react-icons/pi";
import { FaRedhat } from "react-icons/fa6";

import Cardsbottom from "../../components/Cardsbottom";
import Crumb from "../../components/Crumb";

import personal from "../../assets/personal.jpg";

const Personal = () => {
  return (
    <div className="mx-3 sm:mx-3 md:mx-8">
      <Crumb title="PERSONALW" />

      <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg  lg:col-span-2 mb-10">
          <img
            className="w-full h-52 object-cover rounded-t-lg"
            src={personal}
            alt="Student card"
          />
        </div>
        <div className="rounded-lg  p-4 lg:col-span-1">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Segreterie"
              >
                SERVIZI
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Regolamento"
              >
                POSTA ELETTRONICA
              </button>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row gap-4">
              <a
                href="#"
                className="flex flex-col items-start bg-red-700 p-4 rounded-lg text-white hover:bg-red-800"
                aria-label="Noteworthy technology acquisitions 2021"
              >
                <PiUserListBold className="text-5xl mb-2 text-center" />
                <p className="font-normal line-clamp-2">
                  CORSI DI LAUREA 2024-2025
                </p>
              </a>
              <a
                href="#"
                className="flex flex-col items-start bg-red-700 p-4 rounded-lg text-white hover:bg-red-800"
                aria-label="Noteworthy technology acquisitions 2021"
              >
                <FaRedhat className="text-5xl mb-2 text-center" />
                <p className="font-normal line-clamp-2">
                  CONTRIBUTI E AGEVOLAZIONI
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <Cardsbottom />
      </div>
    </div>
  );
};

export default Personal;
