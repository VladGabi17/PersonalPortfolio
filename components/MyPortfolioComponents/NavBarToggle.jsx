import React from "react";

export default function NavBarToggle({ isNavOpen, setIsNavOpen }) {
  return (
    <button
      data-collapse-toggle="navbar-dropdown"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-dropdown"
      aria-expanded={isNavOpen ? "true" : "false"}
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <i className="text-xl fa-solid fa-bars"></i>
    </button>
  );
}
