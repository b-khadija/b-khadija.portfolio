import React, { useState, useRef, useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import "../App.css";
import "../assets/style/CustomCursor.css";
import DefaultImage from "../assets/images/DefaultImage.png";
import StreamberryOne from "../assets/images/StreamberryOne.png";
import StreamberryTwo from "../assets/images/StreamberryTwo.png";
import WorldTourOne from "../assets/images/WorldTourOne.png";
import WorldTourTwo from "../assets/images/WorldTourTwo.png";
import WeatherAppImage from "../assets/images/Weatherapp.jpeg";

const projects = [
  {
    title: "RealTimeChat",
    description: "A real-time chat application",
    link: "",
    github: "https://github.com/b-khadija/RealTimeChat",
    image: null,
  },
  {
    title: "NetflixApp - StreamBerry",
    description: "Clone of Netflix using React & API",
    link: "https://netflix-app-beryl-three.vercel.app/",
    github: "https://github.com/b-khadija/NetflixApp",
    image: StreamberryOne,
    extraImage: StreamberryTwo,
  },
  {
    title: "World Tour",
    description: "A destination blog",
    link: "https://worl-tour-blog.netlify.app/",
    github: "https://github.com/b-khadija/WorldTour",
    image: WorldTourOne,
    extraImage: WorldTourTwo,
  },
  {
    title: "Weather App",
    description: "A weather app that uses the OpenWeatherMap API.",
    link: "https://weatherappchallenge.vercel.app/",
    github: "https://github.com/b-khadija/30DaysOfJavaScript",
    image: WeatherAppImage,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const openProjectModal = (project, e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeProjectModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedProject]);

  return (
    <div className="container mx-auto py-8 flex flex-col items-center cursor-none">
      <CustomCursor />
      <h1 className="text-3xl uppercase font-bold tracking-widest mb-8 text-Black font-RobotoSlab">
        Projets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-none">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-md shadow-md rounded-lg p-6 cursor-none mb-4 transition transform hover:scale-105"
            onClick={(e) => openProjectModal(project, e)}
          >
            <img
              src={project.image || DefaultImage}
              alt={project.title}
              className="w-full h-64 object-cover mb-4 cursor-none"
            />
            <h2 className="text-2xl font-semibold mb-2 text-RichBlack cursor-none">
              {project.title}
            </h2>
            <p className="mb-4 text-lg text-DarkCyan cursor-none">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="cursor-none fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <CustomCursor />
          <div
            ref={modalRef}
            className="bg-white w-full h-full rounded-lg p-8 md:p-20 max-h-screen overflow-y-auto relative shadow-lg cursor-none flex flex-col"
          >
            <button
              onClick={closeProjectModal}
              className="absolute top-5 right-5 mr-5 mt-3 text-4xl font-bold text-DarkCyan hover:text-Fulvous"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 font-RobotoSlab text-RichBlack">
              {selectedProject.title}
            </h2>
            <div className="flex justify-between pt-14 mb-6">
              {selectedProject.link && (
                <div className="flex items-center group">
                  <HiOutlineArrowRight className="transition-transform transform group-hover:rotate-45 duration-200 text-DarkCyan group-hover:text-Fulvous" />
                  <Link
                    to={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-lg cursor-none pl-2 group-hover:underline group-hover:underline-offset-4 text-DarkCyan group-hover:text-Fulvous group-hover:font-semibold"
                  >
                    Voir le site
                  </Link>
                </div>
              )}
              {selectedProject.github && (
                <div className="flex items-center group">
                  <HiOutlineArrowRight className="transition-transform transform group-hover:rotate-45 duration-200 text-DarkCyan group-hover:text-Fulvous " />
                  <Link
                    to={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-lg cursor-none pl-2 group-hover:underline group-hover:underline-offset-4 text-DarkCyan group-hover:text-Fulvous group-hover:font-semibold"
                  >
                    En savoir plus
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 cursor-none">
              <img
                src={selectedProject.image || DefaultImage}
                alt={selectedProject.title}
                className="w-full h-auto object-cover mb-4 cursor-none max-w-full"
              />
              {selectedProject.extraImage && (
                <img
                  src={selectedProject.extraImage}
                  alt={`${selectedProject.title} extra`}
                  className="w-full h-auto object-cover mb-4 cursor-none max-w-full"
                />
              )}
            </div>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
