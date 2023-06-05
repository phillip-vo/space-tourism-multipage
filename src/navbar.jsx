import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isTablet = useMediaQuery({ query: "(min-width: 640px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav>
      {isDesktop ? (
        <div className="absolute top-0 flex items-center justify-between w-full mt-10 z-index">
          <img
            src="/assets/shared/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className="mx-14 my-6 z-10"
          />
          <div className="relative w-3/5 z-10 backdrop-blur-lg backdrop-brightness-125">
            <hr className="absolute w-desktop_hr top-1/2 -left-1/2 opacity-25" />
            <ul className="flex items-center text-secondary font-subheading_2 uppercase gap-12 pl-40">
              <li>
                <Link
                  to="/"
                  className={`h-24 flex items-center hover:text-primary hover:border-primary hover:border-b-2 tracking-widest ${
                    pathname === "/" && "text-primary border-white border-b-2"
                  }`}
                >
                  <strong className="mr-2">00</strong>Home
                </Link>
              </li>
              <li>
                <Link
                  to="destinations/moon"
                  className={`h-24 flex items-center border-b-2 hover:text-primary hover:border-primary hover:border-b-2 tracking-widest ${
                    pathname.includes("/destinations")
                      ? "text-primary border-white"
                      : "border-transparent"
                  }`}
                >
                  <strong className="mr-2">01</strong>Destination
                </Link>
              </li>
              <li>
                <Link
                  to="crew/douglas-hurley"
                  className={`h-24 flex items-center border-b-2 hover:text-primary hover:border-primary hover:border-b-2 tracking-widest ${
                    pathname.includes("/crew")
                      ? "text-primary border-white"
                      : "border-transparent"
                  }`}
                >
                  <strong className="mr-2">02</strong>Crew
                </Link>
              </li>
              <li>
                <Link
                  to="technology/launch-vehicle"
                  className={`h-24 flex items-center border-b-2 hover:text-primary hover:border-primary hover:border-b-2 tracking-widest ${
                    pathname.includes("/technology")
                      ? "text-primary border-white"
                      : "border-transparent"
                  }`}
                >
                  <strong className="mr-2">03</strong>Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : isTablet ? (
        <div className="absolute top-0 flex items-center justify-between w-full z-10">
          <img
            src="/assets/shared/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="mx-8 my-6"
          />
          <div className="bg-tablet">
            <ul className="h-24 px-10 flex text-secondary font-subheading_2 uppercase gap-8 tracking-mobile_technology">
              <li>
                <Link
                  to="/"
                  className={`h-24 flex items-center hover:text-primary hover:border-primary hover:border-b-2 ${
                    pathname === "/" && "text-primary border-white border-b-2"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="destinations/moon"
                  className={`h-24 flex items-center hover:text-primary hover:border-primary hover:border-b-2 ${
                    pathname.includes("/destination") &&
                    "text-primary border-white border-b-2"
                  }`}
                >
                  Destination
                </Link>
              </li>
              <li>
                <Link
                  to="crew/douglas-hurley"
                  className={`h-24 flex items-center hover:text-primary hover:border-primary hover:border-b-2 ${
                    pathname.includes("/crew") &&
                    "text-primary border-white border-b-2"
                  }`}
                >
                  Crew
                </Link>
              </li>
              <li>
                <Link
                  to="technology/launch-vehicle"
                  className={`h-24 flex items-center hover:text-primary hover:border-primary hover:border-b-2 ${
                    pathname.includes("/technology") &&
                    "text-primary border-white border-b-2"
                  }`}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 flex items-center justify-between w-full p-6">
          <img
            src="/assets/shared/logo.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <img
            src="/assets/shared/icon-hamburger.svg"
            alt="menu"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
          {isMenuOpen && (
            <div className="absolute top-0 right-0 h-screen w-2/3 z-10 backdrop-blur-xl">
              <div className="flex justify-end py-8 px-6">
                <img
                  src="/assets/shared/icon-close.svg"
                  alt="close"
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDestinationOpen(false);
                  }}
                />
              </div>
              <ul className="text-primary pl-8 tracking-widest font-nav uppercase mt-8 flex flex-col gap-7">
                <li className="hover:border-white hover:border-r-4 py-1">
                  <Link to="/">
                    <strong className="mr-1">00</strong> Home
                  </Link>
                </li>
                <li className="hover:border-white hover:border-r-4 py-1">
                  <Link to="destinations/moon">
                    <strong className="mr-1">01</strong> Destination
                  </Link>
                </li>
                <li className="hover:border-white hover:border-r-4 py-1">
                  <Link to="crew/douglas-hurley">
                    <strong className="mr-1">02</strong> Crew
                  </Link>
                </li>
                <li className="hover:border-white hover:border-r-4 py-1">
                  <Link to="technology/launch-vehicle">
                    <strong className="mr-1">03</strong> Technology
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
