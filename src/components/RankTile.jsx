import React from "react";

export default function RankTile() {
  return (
    <div className="w-[24.5rem] divide-y divide-indigo-400/20 rounded-lg text-[0.8125rem] leading-5 text-white shadow-xl shadow-black/5 ring-1 ring-indigo-700/10">
      <div className="flex items-center p-4">
        <span className="font-semibold text-5xl text-yellow-400">
          {props.rank}
        </span>
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt="User profile pic"
          className="ml-4 h-10 w-10 flex-none rounded-full"
        />
        <div className="ml-4 flex-auto">
          <div className="font-medium">{props.rankHolder}</div>
          <div className=" text-indigo-700">@Rating: {props.ratings}</div>
        </div>
        <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-white shadow-sm ring-1 ring-indigo-700/10 hover:bg-indigo-500">
          View
        </div>
      </div>
    </div>
  );
}
