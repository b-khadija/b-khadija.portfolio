import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/style/CustomCursor.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 sm:top-0 md:top-0 lg:top-[50px] fixed z-10 text-white w-full">
      <div className="container mx-auto flex justify-between items-center p-4 w-full font-bold uppercase">
        <Logo />
        <nav className="hidden lg:text-2xl md:flex space-x-16 text-lg font-RobotoSlab tracking-wide">
          <Link to="/" className="hover:text-DarkCyan cursor-none">
            Accueil
          </Link>
          <Link to="/Project.js" className="hover:text-DarkCyan cursor-none">
            Projets
          </Link>
          <Link to="/About.js" className="hover:text-DarkCyan cursor-none">
            À propos
          </Link>
          <Link to="/Contact.js" className="hover:text-DarkCyan cursor-none">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <motion.svg
              width={40}
              height={40}
              fill="none"
              stroke="#FFF"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.path
                variants={{
                  closed: { d: "M4 6h16M4 12h16m-7 6h7" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </motion.svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-MenuImage bg-no-repeat bg-cover bg-opacity-90 flex flex-col items-center justify-center z-50">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="focus:outline-none">
              <motion.svg
                width={40}
                height={40}
                fill="none"
                stroke="#FB815E"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </motion.svg>
            </button>
          </div>
          <nav
            role="navigation"
            aria-label="Main menu"
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <ul
              className="space-y-4 my-2 flex flex-col items-center gap-2 uppercase font-semibold font-RobotoSlab tracking-wide"
              role="menubar"
            >
              <li role="none">
                <Link
                  to="/"
                  role="menuitem"
                  onClick={toggleMenu}
                  className="text-Fulvous text-xl hover:text-DarkCyan"
                >
                  Accueil
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/Project.js"
                  role="menuitem"
                  onClick={toggleMenu}
                  className="text-Fulvous text-xl hover:text-DarkCyan"
                >
                  Projets
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/About.js"
                  role="menuitem"
                  onClick={toggleMenu}
                  className="text-Fulvous text-xl hover:text-DarkCyan"
                >
                  À propos
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/Contact.js"
                  role="menuitem"
                  onClick={toggleMenu}
                  className="text-Fulvous text-xl hover:text-DarkCyan"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
