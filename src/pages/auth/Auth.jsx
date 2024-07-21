import React from "react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import {  useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("ESAMI SOSTENIBILI 4 TROVTI", {
      position: "top-center",
    });
    navigate("/sidebar")
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="hidden lg:flex text-white items-center justify-center h-screen bg-red-600 lg:col-span-1">
          <img src={logo} alt="Flowbite Logo" className="h-36 object-cover" />
        </div>
        <div className="px-16 pt-10 h-screen bg-gray-100 lg:col-span-2">
          <div className="info">
            <h3 className="text-red-800 text-3xl font-bold mb-3">
              Restricted area
            </h3>
            <p className="mb-3 text-xl">
              To enter this site please proceed with login Sign in to the
              service
              <span className="font-bold pl-1">
                InfoStud - Sistema della didattica e degli studenti
              </span>
            </p>
            <p className="text-xl">
              InfoStud - Sistema della didattica e degli studenti
            </p>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="text-red-700 text-2xl font-semibold hover:underline">
              UNIVERSITY
            </p>
            <p className="text-red-700 text-2xl font-semibold hover:underline">
              SPID
            </p>
            <p className="text-red-700 text-2xl font-semibold hover:underline">
              CIE
            </p>
          </div>
          <hr className="w-full h-1 bg-slate-200 my-3" />
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your username"
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      minLength={6}
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-16 py-3 text-center"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <div className="">
              <div className="info-form">
                <p className="text-red-700 font-semibold text-xl">
                  Did you forget your password? Having troubles with Infostud?
                  Need help to authenticate? About IdM service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
