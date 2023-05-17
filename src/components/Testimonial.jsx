import React from "react";

export default function Testimonial() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <div className="max-w-screen-md mx-auto my-4">
        <p className="text-white font-bold text-4xl my-4">Testimonials</p>
        <p className="text-gray-400 text-xl font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          porro consequatur. Optio commodi labore aut cumque minima
        </p>
      </div>
      <figure className="max-w-screen-md mx-auto my-12">
        <svg
          className="h-12 mx-auto mb-3 text-indigo-700"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p className="text-2xl font-medium text-white">
            "This platform transformed my web development journey. The
            team-based contests, random team formation, and effective evaluation
            features fueled my growth. The personalized feedback and support
            were game-changers. Highly recommended for an immersive and
            rewarding learning experience."
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-indigo-700">
            <div className="pr-3 font-medium text-white">Micheal Gough</div>
            <div className="pl-3 text-sm font-light text-gray-400">
              Web Development Enthusiast
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="max-w-screen-md mx-auto">
        <button className="text-indigo-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
        <button className="text-indigo-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
