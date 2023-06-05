import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-mobile_destination bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary text-6xl font-subheading_1 uppercase">
        Oops!
      </h1>
      <p className="text-secondary font-body">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-primary text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
