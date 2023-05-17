import React from "react";

import { IconContext } from "react-icons";
import { RiTeamFill, RiSettings4Fill } from "react-icons/ri";
import { MdAssessment, MdSupportAgent } from "react-icons/md";

import FeatureCard from "./FeatureCard";

export default function About() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
      <div className="max-w-screen-md mx-auto my-4">
        <p className="text-white font-bold text-4xl my-4">
          What makes us special
        </p>
        <p className="text-gray-400 text-xl font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          vero recusandae similique est voluptates officiis?
        </p>
      </div>

      <div className="text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center py-8">
        <div className="sm:mb-8">
          <FeatureCard
            title="Team-based Web Contests"
            description="Unleash your competitive spirit and collaborate with teammates to conquer coding challenges together"
          >
            <IconContext.Provider
              value={{ size: 30, className: "text-indigo-700" }}
            >
              <RiTeamFill />
            </IconContext.Provider>
          </FeatureCard>
        </div>
        <div className="sm:mt-8">
          <FeatureCard
            title="Random Team Formation"
            description="Embrace the element of surprise! Experience the excitement of randomly forming teams, forging new connections, and expanding your network"
          >
            <IconContext.Provider
              value={{ size: 30, className: "text-indigo-700" }}
            >
              <RiSettings4Fill />
            </IconContext.Provider>
          </FeatureCard>
        </div>
        <div className="sm:mb-8">
          <FeatureCard
            title="Effective Evaluation"
            description="Get insightful assessments that accurately measure your progress, providing valuable insights for improvement and growth"
          >
            <IconContext.Provider
              value={{ size: 30, className: "text-indigo-700" }}
            >
              <MdAssessment />
            </IconContext.Provider>
          </FeatureCard>
        </div>
        <div className="sm:mt-8">
          <FeatureCard
            title="Personalized Feedback and Support"
            description="Receive tailored feedback and expert guidance, empowering you to reach your full potential in web development"
          >
            <IconContext.Provider
              value={{ size: 30, className: "text-indigo-700" }}
            >
              <MdSupportAgent />
            </IconContext.Provider>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}
