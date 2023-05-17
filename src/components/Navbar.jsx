import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <nav className="bg-[#242424] fixed w-full z-20 top-0 left-0 shadow-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex">
          <span className="sr-only">Logo</span>
          <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
        </a>
        <div className="flex md:order-2">
          <Link to="/login"><button
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Login
          </button>
          </Link>
          <button
            onClick={() => setToggleNavbar(!toggleNavbar)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            toggleNavbar
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:border hover:border-indigo-700 md:hover:border-0 md:hover:text-indigo-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:border hover:border-indigo-700 md:hover:border-0 md:hover:text-indigo-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:border hover:border-indigo-700 md:hover:border-0 md:hover:text-indigo-700 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:border hover:border-indigo-700 md:hover:border-0 md:hover:text-indigo-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
