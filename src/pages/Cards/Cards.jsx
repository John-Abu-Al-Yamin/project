import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-6">
        <aside
          id="default-sidebar"
          className="hidden sm:block z-40 w-64 h-[calc(100vh-64px)] transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    BOLLETTNI
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    PROVE INTERMEDIE
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Link to="/card" className="flex-1 ms-3 whitespace-nowrap">
                    Esami registrati
                  </Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    OPINIONI STUDENTI
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    PART-TIME
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-1 mt-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="flex justify-between text-white p-5 h-32 rounded-lg bg-blue-600">
              <p className="text-xl font-semibold">ESAMI SOSTENUTI</p>
              <p className="text-xl font-bold">22</p>
            </div>
            <div className="flex justify-between text-white p-5 h-32 rounded-lg bg-orange-500">
              <p className="text-xl font-semibold">ESAMI NON REGISTRATI</p>
              <p className="text-xl font-bold">0</p>
            </div>
            <div className="flex justify-between text-white p-5 h-32 rounded-lg bg-green-600">
              <p className="text-xl font-semibold">ESAMI REGISTRATI</p>
              <p className="text-xl font-bold">22</p>
            </div>
            <div className="flex justify-between text-white p-5 h-32 rounded-lg bg-blue-600">
              <p className="text-xl font-semibold">
                CREDITI ACQUISTI (escluso corsi singol)
              </p>
              <p className="text-xl font-bold">173</p>
            </div>
            <div className="flex justify-between text-white p-5 h-32 rounded-lg bg-orange-500">
              <p className="text-xl font-semibold">CREDITI MANCANTI</p>
              <p className="text-xl font-bold">7</p>
            </div>
            <div className="flex justify-between text-white p-5 h-32 rounded-lg bg-green-600">
              <p className="text-xl font-semibold">CREDITI TOTALI </p>
              <p className="text-xl font-bold">180</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
