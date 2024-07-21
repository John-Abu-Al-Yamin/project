import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdBackpack } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { TbLetterI } from "react-icons/tb";
import Cardsbottom from "../../components/Cardsbottom";
import studentcard from "../../assets/studentcard.jpeg";
import graduate11 from "../../assets/graduate11.jpg";
import student from "../../assets/student.jpg";
import student1 from "../../assets/student1.jpg";
import student2 from "../../assets/student2.jpg";
import student3 from "../../assets/student3.jpg";
import student4 from "../../assets/student4.jpg";
import student5 from "../../assets/student5.jpg";
import student6 from "../../assets/student6.jpg";
import personal from "../../assets/personal.jpg";
import contact from "../../assets/contact.jpg";

const Cardstudent = () => {
  return (
    <div className="my-8 text-white">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
        <div className="h-32 rounded-lg bg-red-700 flex flex-col items-center justify-center ">
          <p className="text-5xl">
            <TbLetterI />
          </p>
          <p className="text-xl">CIAO E URP</p>
        </div>
        <div className="h-32 rounded-lg bg-red-700 flex flex-col items-center justify-center ">
          <p className="text-5xl">
            <MdEmail />
          </p>
          <p className="text-xl">EMAIL</p>
        </div>
        <div className="h-32 rounded-lg bg-red-700 flex flex-col items-center justify-center ">
          <p className="text-5xl">
            <FaGraduationCap />
          </p>
          <p className="text-xl">LAUREARSI</p>
        </div>
        <div className="h-32 rounded-lg bg-red-700 flex flex-col items-center justify-center ">
          <p className="text-5xl">
            <FaHandshakeSimple />
          </p>
          <p className="text-xl">CAREER SERVICE</p>
        </div>
        <div className="h-32 rounded-lg bg-red-700 flex flex-col items-center justify-center">
          <p className="text-5xl">
            <MdBackpack />
          </p>
          <p className="text-xl text-center">ANDARE ALLESTERO</p>
        </div>
        <div className="h-32 rounded-lg bg-red-700 flex flex-col items-center justify-center ">
          <p className="text-5xl">
            <FaChildren />
          </p>
          <p className="text-xl">DISABILTA E DSA</p>
        </div>
      </div>

      <div className="my-8 text-black grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className=" rounded-lg ">
          <div className=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={graduate11} alt="graduate11" />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pergamena Day: le giornate dedicate al ritiro dei diplomi di
                laurea (29 agosto)
              </p>
            </div>
          </div>
        </div>
        <div className=" rounded-lg ">
          <div className="mb-8 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={studentcard}
                alt="studentcard"
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Catalogo delle competenze trasversali,di orientamento al lavoro
                e imprenditirali
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student}
            alt="student"
          />
          <p className="text-center text-gray-700 py-2">Borse di studio</p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student1}
            alt="student1"
          />
          <p className="text-center text-gray-700 py-2">
            Recupero Obblighi Formativi Aggiuntivi
          </p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={personal}
            alt="personal"
          />
          <p className="text-center text-gray-700 py-2">
            Diritti degli studenti
          </p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student2}
            alt="student2"
          />
          <p className="text-center text-gray-700 py-2">
            Opinioni degli studenti sulla didattica
          </p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student3}
            alt="student3"
          />
          <p className="text-center text-gray-700 py-2">Salute e benessere</p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student4}
            alt="student4"
          />
          <p className="text-center text-gray-700 py-2">Arti Musica Sport</p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={contact}
            alt="contact"
          />
          <p className="text-center text-gray-700 py-2">
            Scuola superiore di studi avanzati
          </p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student5}
            alt="student5"
          />
          <p className="text-center text-gray-700 py-2">
            Iniziative culturali e sociali degli studenti
          </p>
        </div>
        <div className="h-48 rounded-lg bg-gray-200  ">
          <img
            className="rounded-t-lg h-32 object-cover"
            src={student6}
            alt="student6"
          />
          <p className="text-center text-gray-700 py-2">
            Polo Universitario Penitenziario Sapienza
          </p>
        </div>
        <div className="h-48 rounded-lg   ">
          <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer "
            >
              Utilita
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Mense, risoto,caffe
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Proposte alloggi per studenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sistema bibliotecrio Sapienza
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Proposte alloggi per studenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sistema bibliotecrio Sapienza
            </a>
          </div>
        </div>
        <div className="h-48 rounded-lg   ">
          <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              aria-current="true"
              className="block w-full px-4 py-2 text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer "
            >
              Utilita
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Mense, risoto,caffe
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Proposte alloggi per studenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sistema bibliotecrio Sapienza
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Proposte alloggi per studenti
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Sistema bibliotecrio Sapienza
            </a>
          </div>
        </div>
      </div>

      <div className="mt-44">
        <Cardsbottom />
      </div>
    </div>
  );
};

export default Cardstudent;
