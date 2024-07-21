import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 ">
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
                <span className="flex-1 ms-3 whitespace-nowrap">BOLLETTNI</span>
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
                  ESAMI REGISTRATI
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
                <span className="flex-1 ms-3 whitespace-nowrap">PART-TIME</span>
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
      <div className="flex-1 ">
        <div className="my-6 ">
          <a
            href="#"
            className="flex items-center gap-6 text-white max-w-sm p-6 bg-gray-600  border border-gray-200 rounded-lg shadow hover:bg-gray-500 "
          >
            <h5 className="text-white mb-2 text-2xl font-bold tracking-tight  ">
              ESAMI SOSTENIBILI TROVATI
            </h5>
            <p className="text-white font-bold text-2xl ">1</p>
          </a>
        </div>

        <p className="my-2">
          Esami non ancora sostenuti previsti dal tuo percorso
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-red-700">
                  Codice insegnamento
                </th>
                <th scope="col" className="px-6 py-3 text-red-700">
                  Nome Esame
                </th>
                <th scope="col" className="px-6 py-3 text-red-700">
                  SSD
                </th>
                <th scope="col" className="px-6 py-3 text-red-700">
                  Corso
                </th>
                <th scope="col" className="px-6 py-3 text-red-700">
                  Crediti
                </th>
                <th scope="col" className="px-6 py-3 text-red-700">
                  Anno
                </th>
                <th scope="col" className="px-6 py-3 text-red-700">
                  Tip authorizzazione
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  AAF1005
                </th>
                <td className="px-6 py-4">PROVAFINALE</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">29401</td>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
