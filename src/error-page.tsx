import React from "react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import storm from "./assets/storm.jpeg";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="text-center flex flex-col items-center mt-8 lg:mt-16"
    >
      <div className="py-4 px-4 text-xl md:text-3xl">
        <h2 className="text-color1  font-bold">Oops!</h2>

        {isRouteErrorResponse(error) ? (
          <h2 className="text-color1 font-bold">Page not found</h2>
        ) : (
          <h2 className="text-color1 font-bold">
            Sorry, an unexpected error has occurred.
          </h2>
        )}
      </div>
      <img src={storm} alt="storm-icon" />
      <div className="mt-4 border-2 border-color2 rounded-full px-4 py-2 text-color1 uppercase font-bold">
        <Link to="/">
          home
          <ArrowRightIcon className="h-6 w-6 ml-4 inline text-color5 animate-pulse hover:scale-150" />
        </Link>
      </div>
    </div>
  );
}
