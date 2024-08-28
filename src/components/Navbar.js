import React from "react";
import koraiLogo from "../assets/korai_logo.svg";

const Navbar = () => {
  return (
    <nav className=" p-8 flex justify-between items-center">
      <img
        src={koraiLogo}
        alt="Korai Logo"
        className="h-12 lg:mx-auto sm:mx-0"
      />
      <button className="bg-red-300 text-rose-50 px-4 py-2 lg:mx-10 rounded-3xl sm:mx-0">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
