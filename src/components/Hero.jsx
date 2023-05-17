import React from "react";

export default function Hero() {
  return (
    <div className="mt-[72px] relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 via-indigo-500 to-pink-400 text-transparent">
              A vision for 2023
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold bg-clip-text bg-gradient-to-l from-blue-600 via-indigo-500 to-pink-400 text-transparent text-4xl md:text-5xl lg:text-6xl">
                The Intuitive Web Solutions
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <p className="text-gray-400 text-xl font-light">
                Ready to level up your web development skills? Our web
                application offers a unique learning experience that combines
                gamification with real-world web development challenges.
              </p>
            </div>

            <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300  text-sm font-medium rounded-md transition py-3 px-4"
                href="/"
              >
                Get started
                <svg
                  className="w-3 h-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
