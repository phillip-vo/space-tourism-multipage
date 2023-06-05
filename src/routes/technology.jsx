import React from "react";
import data from "../data/data.json";
import { Link, useLoaderData } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const loader = ({ params }) => {
  const technology = data.technology.find((item) => {
    const name = item.name.replace(" ", "-").toLowerCase();
    return name === params.name;
  });
  if (!technology) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { technology };
};

const Technology = () => {
  const { technology } = useLoaderData();
  const isTablet = useMediaQuery({ query: "(min-width: 640px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div
      className={`bg-cover bg-no-repeat min-h-screen pb-12 flex flex-col ${
        isDesktop
          ? "bg-desktop_technology pt-desktop"
          : isTablet
          ? "bg-tablet_technology pt-tablet items-center"
          : "bg-mobile_technology pt-mobile items-center"
      }`}
    >
      <div
        className={`w-full text-primary uppercase font-subheading_2 flex ${
          isDesktop
            ? "tracking-desktop text-subheading px-desktop_destination"
            : isTablet
            ? "tracking-tablet text-xl px-8"
            : "tracking-widest justify-center"
        }`}
      >
        <strong className="mr-4 opacity-25">03</strong>Space Launch 101
      </div>
      <div
        className={`flex items-center ${
          isDesktop
            ? "pl-desktop_destination mt-12 gap-12 h-desktop_technology"
            : "flex-col items-center text-center"
        }`}
      >
        <img
          src={technology.images.landscape}
          alt={technology.name}
          className={
            isDesktop
              ? "order-3 absolute right-0 w-desktop_technology h-desktop_technology"
              : isTablet
              ? "w-full h-tablet_technology mt-12"
              : `mt-6 h-mobile_technology`
          }
        />
        <ul
          className={`flex gap-4 ${
            isDesktop ? "flex-col order-1 gap-8" : isTablet ? "mt-12" : "mt-7"
          }`}
        >
          {data.technology.map((item, index) => (
            <li key={item.name}>
              <Link
                to={`/technology/${item.name.replace(" ", "-").toLowerCase()}`}
                className={`flex items-center justify-center rounded-full border ${
                  item.name === technology.name
                    ? "bg-white text-dark"
                    : "border-menu text-primary"
                } ${
                  isTablet
                    ? "w-tablet_technology_button h-tablet_technology_button"
                    : "w-10 h-10"
                }`}
              >
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
        <div className={isDesktop && "order-2 w-desktop_home_info"}>
          <div
            className={`flex flex-col font-subheading_1 uppercase text-primary ${
              isDesktop
                ? ""
                : isTablet
                ? "mt-10 items-center"
                : "mt-6 items-center"
            }`}
          >
            <span
              className={`font-subheading_2 text-secondary tracking-mobile_technology ${
                isTablet ? "text-base" : "text-sm"
              }`}
            >
              The Terminology...
            </span>
            <h2
              className={`leading-10 ${
                isTablet ? "text-tablet_subheading mt-4" : "text-2xl "
              }`}
            >
              {technology.name}
            </h2>
          </div>
          <p
            className={`text-secondary font-body ${
              isDesktop
                ? "pt-8"
                : isTablet
                ? "text-base leading-7 mt-6 px-40 text-center"
                : "text-body mt-4 mb-12 px-6 text-center"
            }`}
          >
            {technology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
