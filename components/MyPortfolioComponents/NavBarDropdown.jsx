import React from "react";
export default function NavBarDropdown({ isDropdownOpen, setIsDropdownOpen }) {
  return (
    <li className="relative group">
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="text-xl flex items-center justify-between w-full py-3 font-semibold text-slate-950 rounded md:p-0 md:w-auto"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Inspiration Gallery
        <i className="text-base ms-2.5 mt-1 fa-solid fa-angle-down"></i>
      </button>
      <div
        id="dropdownNavbar"
        className="absolute mt-2 z-10 hidden group-hover:block font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <a
              href="/sketch-gallery"
              className="transition duration-300 font-semibold text-lg text-slate-950 block px-4 py-2 hover:text-white hover:bg-amber-500"
            >
              Sketch
            </a>
          </li>
          <li>
            <a
              href="/wireframe-gallery"
              className="transition duration-300 font-semibold text-lg text-slate-950 block px-4 py-2 hover:text-white hover:bg-amber-500"
            >
              Wireframe
            </a>
          </li>
          <li>
            <a
              href="/hifi-gallery"
              className="transition duration-300 font-semibold text-lg text-slate-950 block px-4 py-2 hover:text-white hover:bg-amber-500"
            >
              HiFi
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

           