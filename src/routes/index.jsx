import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Index = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 640px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div
      className={`bg-cover bg-no-repeat text-primary min-h-screen
        ${
          isDesktop
            ? "bg-desktop_home bg-contain pt-desktop_home pb-24"
            : isTablet
            ? "bg-tablet_home pt-tablet_home px-40"
            : "bg-mobile_home pt-home px-6"
        }`}
    >
      <div
        className={`flex ${
          isDesktop ? "flex-row justify-center gap-64" : "flex-col items-center"
        }`}
      >
        <div
          className={`flex flex-col ${
            isDesktop
              ? "w-desktop_home_info h-desktop_home_info"
              : "items-center "
          }`}
        >
          <span
            className={`font-subheading_2 text-secondary uppercase ${
              isDesktop
                ? "tracking-desktop text-subheading"
                : isTablet
                ? "tracking-tablet text-xl"
                : "tracking-widest"
            }`}
          >
            So you want to travel to
          </span>
          <h1
            className={`font-subheading_1 uppercase mt-1 ${
              isTablet ? "text-tablet_heading leading-none mt-5" : "text-7xl"
            }`}
          >
            Space
          </h1>
          <p
            className={`text-secondary font-body leading-7 ${
              isDesktop
                ? "text-left text-lg mt-8"
                : isTablet
                ? "text-body text-center mt-2"
                : "text-center mt-2 "
            }`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className={`rounded-full flex justify-center items-center cursor-pointer ${
            isDesktop
              ? "w-desktop_explore_outer h-desktop_explore_outer"
              : isTablet
              ? "w-tablet_explore_outer h-tablet_explore_outer mt-20"
              : "w-mobile_explore_outer h-mobile_explore_outer mt-8"
          }`}
        >
          <Link
            to="/destinations/moon"
            className={`bg-white text-dark flex items-center justify-center rounded-full text-dark font-subheading_1 uppercase ${
              isDesktop
                ? "w-desktop_explore h-desktop_explore text-desktop_explore tracking-desktop_explore"
                : isTablet
                ? "w-tablet_explore h-tablet_explore text-tablet_explore"
                : "w-mobile_explore h-mobile_explore text-lg tracking-wider"
            }`}
          >
            Explore
            <div
              className={`absolute rounded-full flex items-center justify-center hover:bg-white hover:opacity-10 ${
                isTablet
                  ? "w-tablet_explore_outer h-tablet_explore_outer"
                  : "w-mobile_explore_outer h-mobile_explore_outer"
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
