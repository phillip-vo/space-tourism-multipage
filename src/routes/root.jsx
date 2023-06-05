import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import data from "../data/data.json";
import Navbar from "../components/Navbar";

export const loader = () => {
  return { data };
};

const Root = () => {
  const { data } = useLoaderData();

  return (
    <div className="w-full h-full">
      <Navbar data={data} />
      <Outlet />
    </div>
  );
};

export default Root;
