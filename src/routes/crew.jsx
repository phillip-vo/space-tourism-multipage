import React from "react";
import data from "../data/data.json";
import { Link, useLoaderData } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const loader = ({ params }) => {
  const crew = data.crew.find((person) => {
    const name = person.name.replace(" ", "-");
    return name.toLowerCase() === params.name;
  });
  if (!crew) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { crew };
};

const Crew = () => {
  const { crew } = useLoaderData();
  const isTablet = useMediaQuery({ query: "(min-width: 640px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return isDesktop ? (
    <div className="relative bg-desktop_crew bg-cover bg-no-repeat min-h-screen pt-desktop pb-16 flex flex-col">
      <div className="w-full text-primary uppercase font-subheading_2 flex tracking-desktop text-subheading px-desktop_destination">
        <strong className="mr-4 opacity-25">02</strong>Meet Your Crew
      </div>
      <div className="flex px-desktop_destination">
        <div className="flex flex-col w-desktop_crew_info">
          <div className="flex flex-col font-subheading_1 uppercase text-primary mt-14">
            <span className="opacity-25 text-2xl">{crew.role}</span>
            <h2 className="text-tablet_subheading">{crew.name}</h2>
          </div>
          <p className="w-desktop_planet h-40 text-secondary text-body font-body leading-7 mt-4">
            {crew.bio}
          </p>
          <ul className="flex gap-4 mt-24">
            {data.crew.map((person) => (
              <li key={person.name}>
                <Link
                  to={`/crew/${person.name.replace(" ", "-").toLowerCase()}`}
                >
                  <div
                    className={`w-mobile_crew_slider h-mobile_crew_slider rounded-full ${
                      person.name === crew.name ? "bg-white" : "bg-menu"
                    }`}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={crew.images.png}
          alt={crew.name}
          className="absolute bottom-0 right-0 mr-desktop_destination h-tablet_crew"
        />
      </div>
    </div>
  ) : isTablet ? (
    <div className="relative bg-tablet_crew bg-cover bg-no-repeat min-h-screen flex flex-col items-center pt-tablet">
      <div className="w-full text-primary uppercase font-subheading_2 flex tracking-tablet text-xl px-8">
        <strong className="mr-4 opacity-25">02</strong>Meet Your Crew
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center font-subheading_1 uppercase text-primary mt-14">
            <span className="opacity-25 text-2xl">{crew.role}</span>
            <h2 className="text-tablet_subheading">{crew.name}</h2>
          </div>
          <p className="text-secondary text-center text-body font-body w-tablet_crew_info leading-7 mt-4">
            {crew.bio}
          </p>
          <ul className="flex gap-4 mt-6">
            {data.crew.map((person) => (
              <li key={person.name}>
                <Link
                  to={`/crew/${person.name.replace(" ", "-").toLowerCase()}`}
                >
                  <div
                    className={`w-mobile_crew_slider h-mobile_crew_slider rounded-full ${
                      person.name === crew.name ? "bg-white" : "bg-menu"
                    }`}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={crew.images.png}
          alt={crew.name}
          className="w-tablet_crew mt-12"
        />
      </div>
    </div>
  ) : (
    <div className="bg-mobile_crew bg-cover bg-no-repeat h-screen flex flex-col items-center pt-mobile px-6">
      <span className="text-primary uppercase font-subheading_2 tracking-widest">
        <strong className="mr-4 opacity-25">02</strong>Meet Your Crew
      </span>
      <div className="flex justify-center items-center border-gray-700 border-b mt-8">
        <img
          src={crew.images.png}
          alt={crew.name}
          className="object-contain w-mobile_crew h-mobile_crew"
        />
      </div>
      <ul className="flex gap-4 mt-6">
        {data.crew.map((person) => (
          <li key={person.name}>
            <Link to={`/crew/${person.name.replace(" ", "-").toLowerCase()}`}>
              <div
                className={`w-mobile_crew_slider h-mobile_crew_slider rounded-full ${
                  person.name === crew.name ? "bg-white" : "bg-menu"
                }`}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center font-subheading_1 uppercase text-primary mt-6">
        <span className="opacity-25">{crew.role}</span>
        <h2 className="text-2xl">{crew.name}</h2>
      </div>
      <p className="text-secondary text-center text-body font-body mt-4 mb-12">
        {crew.bio}
      </p>
    </div>
  );
};

export default Crew;
