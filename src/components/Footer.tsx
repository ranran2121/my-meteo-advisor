import React from "react";
import { SunIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="h-8 bg-color1 text-color4 text-center text-sm pt-1">
      Do you like the website?
      <a
        href="mailto:m.hacke@example.com"
        target="_blank"
        rel="noreferrer"
        className="text-color5 font-semibold underline ml-2"
      >
        Email me
        <SunIcon className="h-6 w-6 ml-2 inline text-color5 animate-pulse hover:scale-150" />
      </a>
    </footer>
  );
};

export default Footer;
