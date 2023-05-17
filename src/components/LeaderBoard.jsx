import React from "react";

export default function LeaderBoard() {
  return (
    <div className="max-w-screen-xl px-4 py-2 mx-auto text-center lg:py-8 lg:px-6">
      <div className="max-w-screen-md mx-auto my-4 mb-12">
        <p className="text-white font-bold text-4xl my-4">Top Performers</p>
        <p className="text-gray-400 text-xl font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          vero recusandae similique est voluptates officiis?
        </p>
      </div>
      <div className="text-left max-w-screen-md mx-auto">
        <div className="max-w-[24.5rem] mx-auto my-4 divide-y divide-indigo-400/20 rounded-lg text-[0.8125rem] leading-5 text-white shadow-xl shadow-black/10 ring-1 ring-indigo-700/10">
          {/* Rank Tile starts */}
          <div className="flex items-center p-4">
            <span className="font-semibold text-5xl w-10 bg-clip-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300 text-transparent">
              1.
            </span>
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt="User profile pic"
              className="ml-4 h-10 w-10 flex-none rounded-full"
            />
            <div className="ml-4 flex-auto">
              <div className="font-medium">Sheldon Cooper</div>
              <div className=" text-indigo-700">@Rating: 9999</div>
            </div>
            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-white shadow-sm ring-1 ring-indigo-700/10 hover:bg-indigo-500">
              View
            </div>
          </div>
          {/* Rank Tile ends */}
          {/* Rank Tile starts */}
          <div className="flex items-center p-4">
            <span className="font-semibold text-5xl w-10 bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-transparent">
              2.
            </span>
            <img
              src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"
              alt="User profile pic"
              className="ml-4 h-10 w-10 flex-none rounded-full"
            />
            <div className="ml-4 flex-auto">
              <div className="font-medium">Penny</div>
              <div className=" text-indigo-700">@Rating: 9428</div>
            </div>
            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-white shadow-sm ring-1 ring-indigo-700/10 hover:bg-indigo-500">
              View
            </div>
          </div>
          {/* Rank Tile ends */}
          {/* Rank Tile starts */}
          <div className="flex items-center p-4">
            <span className="font-semibold text-5xl w-10 bg-clip-text bg-gradient-to-r from-amber-600  to-amber-950 text-transparent">
              3.
            </span>
            <img
              src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
              alt="User profile pic"
              className="ml-4 h-10 w-10 flex-none rounded-full"
            />
            <div className="ml-4 flex-auto">
              <div className="font-medium">Lenard Hofstadter</div>
              <div className=" text-indigo-700">@Rating: 9412</div>
            </div>
            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-white shadow-sm ring-1 ring-indigo-700/10 hover:bg-indigo-500">
              View
            </div>
          </div>
          {/* Rank Tile ends */}
          <hr />
          <div className="flex items-center justify-end p-4">
            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-white shadow-sm ring-1 ring-indigo-700/10 hover:bg-indigo-500">
              View All
            </div>
          </div>
        </div>

        {/* Rank Tile ends */}
      </div>
    </div>
  );
}
