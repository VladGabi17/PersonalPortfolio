import React, { useState, useEffect } from "react";

import { NavBarLogo, NavBarToggle, NavBarMenu } from "@components";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`z-10 backdrop-blur-sm fixed top-0 left-0 right-0 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
        <NavBarLogo />
        <NavBarToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <NavBarMenu
          isNavOpen={isNavOpen}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>
    </nav>
  );
}