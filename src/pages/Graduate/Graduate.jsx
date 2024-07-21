import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import Listgroup from "../../components/Listgroup";
import Cardsbottom from "../../components/Cardsbottom";
import Crumb from "../../components/Crumb";

// Import images
import studentcard from "../../assets/studentcard.jpeg";
import graduate from "../../assets/graduate.jpg";
import graduate1 from "../../assets/graduate1.jpg";
import graduate2 from "../../assets/graduate2.jpeg";
import graduate3 from "../../assets/graduate3.jpeg";
import graduate4 from "../../assets/graduate4.jpeg";
import graduate5 from "../../assets/graduate5.jpeg";
import graduate6 from "../../assets/graduate6.jpg";
import graduate7 from "../../assets/graduate7.jpeg";
import graduate8 from "../../assets/graduate8.jpeg";
import graduate9 from "../../assets/graduate9.jpeg";
import graduate10 from "../../assets/graduate10.jpg";
import graduate11 from "../../assets/graduate11.jpg";
import maingraduate from "../../assets/maingraduate.jpg";

const Graduate = () => {
  return (
    <div className="mx-3 sm:mx-3 md:mx-8">
      <Crumb title="LAUREATI" />

      <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg lg:col-span-2 mb-10">
          <img
            className="w-full h-52 object-cover rounded-t-lg"
            src={maingraduate}
            alt="Student card"
          />

          <div className="relative">
            <div className="absolute inset-y-0 pr-8 end-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-red-700 font-bold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="border-custom block mt-4 w-full p-2 ps-10 text-sm text-black border border-red-700 rounded-lg bg-gray-50 focus:ring-red-700 focus:border-red-800 dark:focus:ring-red-700 dark:focus:border-red-700"
              placeholder="Cerca nel sito"
            />
          </div>
        </div>
        <div className="rounded-lg p-4 lg:col-span-1">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row gap-4">
              <a
                href="#"
                className="flex flex-col items-start p-4 rounded-lg text-black"
                aria-label="Noteworthy technology acquisitions 2021"
              >
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={graduate4}
                  alt="Corsi di Laurea 2024-2025"
                />
                <p className="font-normal line-clamp-2">
                  CORSI DI LAUREA 2024-2025
                </p>
              </a>
            </div>

            <div className="flex gap-4">
              <p className="text-red-700 text-2xl">INFOSTUD</p>
              <p className="text-red-700 text-xl">Register</p>
            </div>
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
          </div>
        </div>
      </div>

      <div className="my-24 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
        <div className="h-full rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={graduate}
            alt="Master"
          />
          <p className="bg-red-700 py-4 text-center text-white text-sm md:text-base">
            Master
          </p>
        </div>
        <div className="h-full rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={graduate8}
            alt="Dottorati di ricerca"
          />
          <p className="bg-red-700 py-4 text-center text-white text-sm md:text-base">
            Dottorati di ricerca
          </p>
        </div>
        <div className="h-full rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={graduate2}
            alt="Corsi di specializzazione"
          />
          <p className="bg-red-700 py-4 text-center text-white text-sm md:text-base">
            Corsi di specializzazione
          </p>
        </div>
        <div className="h-full rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={graduate6}
            alt="Esami di Stato"
          />
          <p className="bg-red-700 py-4 text-center text-white text-sm md:text-base">
            Esami di Stato
          </p>
        </div>
        <div className="h-full rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={graduate}
            alt="Noisapienza Associazio Alumni"
          />
          <p className="bg-red-700 py-4 text-center text-white text-sm md:text-base">
            Noisapienza Associazio Alumni
          </p>
        </div>
        <div className="h-full rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={graduate2}
            alt="Disabilita e DSA"
          />
          <p className="bg-red-700 py-4 text-center text-white text-sm md:text-base">
            Disabilita e DSA
          </p>
        </div>
      </div>

      <div className="my-8 text-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate3}
                alt="Catalogo delle competenze"
              />
            </a>
            <div className="bg-red-700 p-5">
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Catalogo delle competenze trasversali, di orientamento al lavoro
                e imprenditirali
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate9}
                alt="Eventi di recruiting e placement"
              />
            </a>
            <div className="bg-red-700 p-5">
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Eventi di recruiting e placement
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate7}
                alt="Formazione non formale e informale"
              />
            </a>
            <div className="bg-red-700 p-5">
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Formazione non formale e informale
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 text-black grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg">
          <div className="mb-8 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={studentcard}
                alt="Student card"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Senato della Repubblica: Avviso di selezione per 20 tirocini
                extracurriculari – Edizione 2024 (Scadenza: 30 luglio 2024)
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="mb-8 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate9}
                alt="Student card"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Banca d'Italia: Avviso di selezione per 30 tirocini
                extracurriculari (scadenza: 30 luglio 2024)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 text-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate10}
                alt="Catalogo delle competenze"
              />
            </a>
            <div className=" p-5">
              <p className="mb-3 font-normal  dark:text-gray-400">
                Pubblicato il bando di concorso per le borse di perfezionamento
                all'estero (scadenza prorogata al 18 settembre 2024)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate11}
                alt="Eventi di recruiting e placement"
              />
            </a>
            <div className=" p-5">
              <p className="mb-3 font-normal  dark:text-gray-400">
                Pergamena Day: le giornate dedicate al ritiro dei diplomi di
                laurea (29 agosto)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate1}
                alt="Formazione non formale e informale"
              />
            </a>
            <div className=" p-5">
              <p className="mb-3 font-normal  dark:text-gray-400">
                Formazione non formale e informale
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={graduate5}
                alt="Open Badge Sapienza"
              />
            </a>
            <div className="bg-red-700 p-5">
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Open Badge Sapienza per la valorizzazione delle esperienze
                extracurriculari
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={studentcard} alt="24 CFU" />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-black dark:text-gray-400">
                24 CFU
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Listgroup />
        <Cardsbottom />
      </div>
    </div>
  );
};

export default Graduate;
