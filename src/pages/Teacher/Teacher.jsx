import React from "react";
import studentcard from "../../assets/studentcard.jpeg";

import { FaChalkboardTeacher } from "react-icons/fa";
import Cardsbottom from "../../components/Cardsbottom";
import Crumb from "../../components/Crumb";
const Teacher = () => {
  return (
    <div className="mx-3 sm:mx-3 md:mx-8">
            <Crumb title="DOCENTI" />
      <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg  lg:col-span-2 mb-10">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={studentcard}
            alt="Student card"
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
            <div className="flex  gap-3">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Segreterie"
              >
                POSTA ELETTROPNICA
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Regolamento"
              >
                INFOSTUD DOCENTI
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
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200">
          <p className="p-5 text-center">Cerca docent</p>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
          <p className="p-5 text-center">
            Proce dure di laurea:indicazioni per i docenti
          </p>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
          <p className="p-5 text-center">
            Abilitazione scientifica nazionale 2023-2025
          </p>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
          <p className="p-5 text-center">
            Rilevazione Opinioni Studenti (OPIS)
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className=" rounded-lg ">
          <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            >
              Strutture
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Facoltà
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Dipartimenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Centri
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sistema bibliotecario Sapienza
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Polo museale Sapienza
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Policlinici universitari
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sedi esterne decentrate
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Virtual Tour
            </a>
          </div>
        </div>

        <div className=" rounded-lg ">
          <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            >
              Come fare per
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Salute e Sicurezza (SGSSL)
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Uffici per il personale
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Riforma ex D.M.270
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Policy per le relazioni con i media
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Inquadramento nei settori concorsuali ex D.M. n. 855/2015
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Nucleo di valutazione di Ateneo
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Team Qualità
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Strumenti IT per prove ed esami
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Studenti con disabilità e DSA: linee guida per i docenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Modulo di attestazione esame
            </a>
          </div>
        </div>

        <div className=" rounded-lg ">
          <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            >
              Servizi docenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Facoltà
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Dipartimenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Centri
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sistema bibliotecario Sapienza
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Polo museale Sapienza
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Policlinici universitari
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sedi esterne decentrate
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Virtual Tour
            </a>
          </div>
        </div>
        <div className=" rounded-lg ">
          <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            >
              Cerca
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Salute e Sicurezza (SGSSL)
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Uffici per il personale
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Riforma ex D.M.270
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Policy per le relazioni con i media
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Inquadramento nei settori concorsuali ex D.M. n. 855/2015
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Nucleo di valutazione di Ateneo
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Team Qualità
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Strumenti IT per prove ed esami
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Studenti con disabilità e DSA: linee guida per i docenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Modulo di attestazione esame
            </a>
          </div>
        </div>
      </div>
      <div className="my-6">
      <Cardsbottom/>
      </div>
    </div>
  );
};

export default Teacher;
