import React from "react";
import logo from "../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Flowbite Logo" className="h-24" />
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              className="w-5 h-5"
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
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:flex items-center gap-3">
            <input
              type="text"
              id="search-navbar-1"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-700 focus:border-red-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700"
              placeholder="Cerca nel sito"
            />
            <span className="text-red-700 text-2xl">
              <FaUserAlt />
            </span>
            <select
              id="countries"
              className="block w-24 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-700 focus:border-red-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700"
            >
              <option value="IT" selected>
                IT
              </option>
            </select>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-3 px-4 text-gray-900 rounded transition-all duration-300 hover:bg-red-700 hover:text-white md:p-3 dark:text-white dark:hover:bg-red-700 dark:hover:text-white"
                aria-current="page"
              >
                STUDENTI
              </Link>
            </li>
            <li>
              <Link
                to="/graduate"
                className="block py-3 px-4 text-gray-900 rounded transition-all duration-300 hover:bg-red-700 hover:text-white md:p-3 dark:text-white dark:hover:bg-red-700 dark:hover:text-white"
              >
                LAUREATI
              </Link>
            </li>
            <li>
              <Link
                to="/teacher"
                className="block py-3 px-4 text-gray-900 rounded transition-all duration-300 hover:bg-red-700 hover:text-white md:p-3 dark:text-white dark:hover:bg-red-700 dark:hover:text-white"
              >
                DOCENTI
              </Link>
            </li>
            <li>
              <Link
                to="/personal"
                className="block py-3 px-4 text-gray-900 rounded transition-all duration-300 hover:bg-red-700 hover:text-white md:p-3 dark:text-white dark:hover:bg-red-700 dark:hover:text-white"
              >
                PERSONALE
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-3 px-4 text-gray-900 rounded transition-all duration-300 hover:bg-red-700 hover:text-white md:p-3 dark:text-white dark:hover:bg-red-700 dark:hover:text-white"
              >
                CONTATTI
              </Link>
            </li>
            <li className="md:hidden">
              <div className="relative mt-3">
                <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <div className="flex gap-3">
                  <input
                    type="text"
                    id="search-navbar-1"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-700 focus:border-red-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700"
                    placeholder="Cerca nel sito"
                  />
                  <select
                    id="countries"
                    className="block w-24 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-700 focus:border-red-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700"
                  >
                    <option value="IT" selected>
                      IT
                    </option>
                  </select>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
