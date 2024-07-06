import React from "react";
import NavBarDropdown from "./NavBarDropdown";

export default function NavBarMenu({
  isNavOpen,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  return (
    <div
      className={`w-full md:block md:w-auto ${isNavOpen ? "" : "hidden"}`}
      id="navbar-dropdown"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-1 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        <li>
          <a
            href="/designer"
            className=" group transition duration-300 font-semibold text-xl text-slate-950 block py-2 pr-4 rounded md:p-0"
          >
            Designer
            <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-500"></span>
          </a>
        </li>
        <li>
          <a
            href="/coder"
            className=" group transition duration-300 font-semibold text-xl text-slate-950 block py-2 pr-4 rounded md:p-0"
          >
            Coder
            <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-500"></span>
          </a>
        </li>
        <NavBarDropdown
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        <li>
          <a
            href="/contact"
            className=" group transition duration-300 font-semibold text-xl text-slate-950 block py-2 pr-4 rounded md:p-0"
          >
            Contact
            <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-500"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}
