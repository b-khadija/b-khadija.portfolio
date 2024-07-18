import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/style/AnimationMenu.css";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const NavItem = ({ to, text }) => {
    const isActive = location.pathname === to;

    return (
      <li role="none" className={isActive ? "current" : ""}>
        <Link
          to={to}
          className="link-menu"
          data-hover={text}
          aria-current={isActive ? "page" : undefined}
          onClick={closeMenu}
        >
          {text}
        </Link>
      </li>
    );
  };

  return (
    <header className="fixed top-0 w-full z-10 text-Black header">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src={Logo} alt="Logo" width={80} height={80} />
        <nav
          role="navigation"
          aria-label="Main menu"
          className="hidden lg:flex text-xl font-semibold font-RobotoSlab tracking-wide uppercase"
        >
          <ul role="menubar" className="animation-menu">
            <NavItem to="/" text="Accueil" />
            <NavItem to="/Project.js" text="Projets" />
            <NavItem to="/About.js" text="À propos" />
            <NavItem to="/Contact.js" text="Contact" />
          </ul>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="focus:outline-none"
          >
            <svg
              width={40}
              height={40}
              fill="none"
              stroke="#161616"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-MenuImage bg-no-repeat bg-cover bg-opacity-90 flex flex-col items-center justify-center z-50"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              width={40}
              height={40}
              fill="none"
              stroke="#161616"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <nav
            role="navigation"
            aria-label="Mobile menu"
            className="w-full flex flex-col items-center text-Black font-bold font-RobotoSlab uppercase"
          >
            <ul className="space-y-8" role="menubar">
              <NavItem to="/" text="Accueil" />
              <NavItem to="/Project.js" text="Projets" />
              <NavItem to="/About.js" text="À propos" />
              <NavItem to="/Contact.js" text="Contact" />
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
