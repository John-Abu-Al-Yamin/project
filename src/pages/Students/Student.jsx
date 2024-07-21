import React from "react";
import Crumb from "../../components/Crumb";
import studentcard from "../../assets/studentcard.jpeg";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import Cardstudent from "./Cardstudent";
import { Link } from "react-router-dom";
import graduate11 from "../../assets/graduate11.jpg";

const Student = () => {
  return (
    <div className="   mx-3 sm:mx-3 md:mx-8">
      <Crumb title="studenti" />
      <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg  lg:col-span-2 mb-10">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={graduate11}
            alt="graduate11"
          />

          <div class="relative">
            <div class="absolute inset-y-0 pr-8  end-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-6 h-6  text-red-700 font-bold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="border-custom  block  mt-4 w-full p-2 ps-10 text-sm text-black border border-red-700 rounded-lg bg-gray-50 focus:ring-red-700 focus:border-red-800  dark:focus:ring-red-700 dark:focus:border-red-700"
              placeholder="Cerca nel sito"
            />
          </div>
        </div>
        <div className="rounded-lg  p-4 lg:col-span-1">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Segreterie"
              >
                SEGRETERIE
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Regolamento"
              >
                REGOLAMENTO
              </button>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row gap-4">
              <a
                href="#"
                className="flex flex-col items-start bg-red-700 p-4 rounded-lg text-white hover:bg-red-800"
                aria-label="Noteworthy technology acquisitions 2021"
              >
                <FaChalkboardTeacher className="text-5xl mb-2 text-center" />
                <p className="font-normal line-clamp-2">
                  CORSI DI LAUREA 2024-2025
                </p>
              </a>
              <a
                href="#"
                className="flex flex-col items-start bg-red-700 p-4 rounded-lg text-white hover:bg-red-800"
                aria-label="Noteworthy technology acquisitions 2021"
              >
                <RiMoneyPoundCircleLine className="text-5xl mb-2 text-center" />
                <p className="font-normal line-clamp-2">
                  CONTRIBUTI E AGEVOLAZIONI
                </p>
              </a>
            </div>

            <div className="flex  gap-4">
              <p className="text-red-700 text-2xl">INFOSTUD</p>
              <p className="text-red-700 text-xl">Register</p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/auth"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Desktop
              </Link>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Mobile button"
              >
                Mobile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cardstudent />
    </div>
  );
};

export default Student;
