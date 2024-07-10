import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Contact = () => {
  return (
    <section className="flex justify-center w-full items-center flex-col min-h-screen text-Black z-0">
      <h1 className="text-xl sm:text-3xl font-bold mb-8 uppercase">Contact</h1>
      <span className="w-full max-w-4xl flex justify-between items-center mb-14 border-t-2 border-gray-500 pt-8 space-x-8 space-y-8 sm:space-y-0 sm:space-x-8"></span>
      <div className="max-w-4xl w-full flex justify-around sm:space-y-0 sm:space-x-8">
        <div className="flex space-x-3">
          <span className="text-xl sm:text-xl">&#x2197;</span>
          <Link
            to="https://www.linkedin.com/in/khadija-bayssir/"
            target="_blank"
            className="text-xl sm:text-2xl hover:underline"
            aria-label="Ouvrir Linkedin dans un nouvel onglet"
            aria-describedby="linkedin-desc"
          >
            Linkedin
          </Link>
        </div>
        <div id="linkedin-desc" className="sr-only">
          Ouvre le profil LinkedIn de Khadija Bayssir dans un nouvel onglet
        </div>
        <div className="flex space-x-3">
          <span className="text-xl sm:text-xl">&#x2197;</span>
          <Link
            to="https://github.com/b-khadija/"
            target="_blank"
            className="text-xl sm:text-2xl hover:underline"
            aria-label="Ouvrir Github dans un nouvel onglet"
            aria-describedby="github-desc"
          >
            Github
          </Link>
        </div>
        <div id="github-desc" className="sr-only">
          Ouvre le profil GitHub de Khadija Bayssir dans un nouvel onglet
        </div>
      </div>
    </section>
  );
};

export default Contact;
