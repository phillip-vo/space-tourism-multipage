import React from "react";
import data from "../data/data.json";
import { Link, useLoaderData } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const loader = ({ params }) => {
  const destination = data.destinations.find(
    (destination) => destination.name.toLowerCase() === params.name
  );
  if (!destination) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { destination };
};

const Destination = () => {
  const { destination } = useLoaderData();
  const isTablet = useMediaQuery({ query: "(min-width: 640px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div
      className={`bg-cover bg-no-repeat min-h-screen flex flex-col ${
        isDesktop
          ? "bg-desktop_destination pt-desktop"
          : isTablet
          ? "bg-tablet_destination pt-tablet items-center"
          : "bg-mobile_destination pt-mobile px-6 items-center"
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
        <strong className="mr-4 opacity-25">01</strong>Pick Your Destination
      </div>
      <div
        className={`flex items-center ${
          isDesktop ? "flex-row justify-center mt-8 gap-32" : "flex-col"
        }`}
      >
        <img
          src={destination.images.png}
          alt={destination.name}
          className={
            isDesktop
              ? "w-desktop_planet"
              : isTablet
              ? "w-tablet_planet mt-12"
              : "w-mobile_planet mt-8"
          }
        />
        <div
          className={`flex flex-col ${
            isDesktop ? "w-desktop_planet" : "items-center"
          }`}
        >
          <ul
            className={`text-secondary flex font-nav tracking-widest uppercase ${
              isDesktop
                ? "gap-8"
                : isTablet
                ? "mt-12 gap-8"
                : "mt-6 gap-6 h-mobile_destination_nav_height"
            }`}
          >
            {data.destinations.map((item) => (
              <li
                key={item.name}
                className={`active:text-white active:border-white hover:border-gray-500 hover:border-b-2 ${
                  item.name === destination.name &&
                  "text-white border-white border-b-2 hover:border-white"
                } ${isTablet && "py-2"}`}
              >
                <Link to={`/destinations/${item.name.toLowerCase()}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <h1
            className={`font-subheading_1 uppercase text-primary leading-none mt-8 ${
              isDesktop
                ? "text-desktop_destination_heading"
                : isTablet
                ? "text-7xl"
                : "text-mobile_destination_heading"
            }`}
          >
            {destination.name}
          </h1>
          <p
            className={`text-secondary text-body font-body leading-7 ${
              isDesktop
                ? "mt-6 h-32"
                : isTablet
                ? "w-tablet_destination_info text-center mt-2"
                : "px-6 text-center mt-2"
            }`}
          >
            {destination.description}
          </p>
          <hr
            className={`border-gray-700 ${
              isDesktop
                ? "w-full mt-12"
                : isTablet
                ? "w-tablet_destination_info mt-12"
                : "w-full mt-8"
            }`}
          />
          <div
            className={`${
              isDesktop
                ? "w-full flex gap-20"
                : isTablet
                ? " w-full flex justify-center gap-20"
                : ""
            }`}
          >
            <div
              className={`flex flex-col uppercase mt-8 gap-2 ${
                !isDesktop && "items-center"
              }`}
            >
              <span className="text-secondary font-subheading_2 tracking-widest text-sm">
                Avg Distance
              </span>
              <span className="text-primary font-subheading_1 text-mobile_destination_subheading">
                {destination.distance}
              </span>
            </div>
            <div
              className={`flex flex-col uppercase mt-8 pb-16 gap-2 ${
                !isDesktop && "items-center"
              }`}
            >
              <span className="text-secondary font-subheading_2 tracking-widest text-sm">
                Est. Travel Time
              </span>
              <span className="text-primary font-subheading_1 text-mobile_destination_subheading">
                {destination.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
