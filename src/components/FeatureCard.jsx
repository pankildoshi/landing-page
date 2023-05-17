import React from "react";

export default function FeatureCard(props) {
  return (
    <div className="w-56 h-72 m-8 block rounded-xl border shadow-xl transition border-indigo-500/10 shadow-indigo-500/10">
      <div className="inline-flex w-14 h-14 mx-2 p-[2px] relative -top-6 -left-6 rounded-full bg-gradient-to-l from-blue-600 via-indigo-500 to-pink-400">
        <div className="w-full h-full p-2 flex items-center justify-center rounded-full bg-black">
          {props.children}
        </div>
      </div>
      <div className="px-2">
        <h5 className="text-lg text-center font-bold bg-clip-text bg-gradient-to-l from-blue-600 via-indigo-500 to-pink-400 text-transparent">
          {props.title}
        </h5>
        <p className="mt-2 p-2 text-center text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  );
}
