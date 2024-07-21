import React from "react";

import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import Cardsbottom from "../../components/Cardsbottom";
import Crumb from "../../components/Crumb";

import studentcard from "../../assets/studentcard.jpeg";
import contact from "../../assets/contact.jpg";
import contact1 from "../../assets/contact1.jpg";
import contact2 from "../../assets/contact2.jpg";
import contact4 from "../../assets/contact4.jpg";
import contact5 from "../../assets/contact5.jpg";
import personal from "../../assets/personal.jpg";
import student from "../../assets/student.jpg";

const Contact = () => {
  return (
    <div className="mx-3 sm:mx-3 md:mx-8">
      <Crumb title="CONTATTI" />

      <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg  lg:col-span-2 mb-10">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={contact1}
            alt="contact1"
          />
        </div>
        <div className="rounded-lg  p-4 lg:col-span-1">
          <div className="flex  gap-3 lg:gap-6">
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Segreterie"
              >
                UFFICIO RELAZIONI CON IL PUBBLICO
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                aria-label="Regolamento"
              >
                HELLO WELCOME OFFICE
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
          </div>
        </div>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={contact4}
            alt="contact4"
          />
          <p className="p-2">Dove siamo</p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={contact}
            alt="contact"
          />
          <p className="p-2">CIAO - Informazioni </p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={contact1}
            alt="contact1"
          />
          <p className="p-2">Segreterie studenti</p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={contact2}
            alt="Student card"
          />
          <p className="p-2">Disabilità e DSA</p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={contact5}
            alt="contact"
          />
          <p className="p-2">800 81 11 92 Numeri utili </p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={personal}
            alt="Student card"
          />
          <p className="p-2">PEC - Posta Elettronica Certificata</p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={studentcard}
            alt="Student card"
          />
          <p className="p-2">Posta elettronica</p>
        </div>
        <div className="h-44 rounded-lg bg-gray-200">
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={student}
            alt="Student "
          />
          <p className="p-2">Stampa e comunicazione</p>
        </div>
      </div>
      <div className="my-6">
        <Cardsbottom />
      </div>
    </div>
  );
};

export default Contact;
