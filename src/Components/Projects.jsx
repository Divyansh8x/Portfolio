import React from "react";
import Netflix from "../assets/portfolio/Netflix.png";
import PasswordGenerator from "../assets/portfolio/PasswordGenerator.png";
import PomodoroApp from "../assets/portfolio/PomodoroApp.png";
import ThemeSwitcher from "../assets/portfolio/Theme_Switcher.png";
import TicTacToe from "../assets/portfolio/Tic-Tac-Toe.png";
import TodoApp from "../assets/portfolio/TodoApp.png";
import WeatherApplication from "../assets/portfolio/WeatherApplication.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Netflix,
      style: "mt-16 ml-1 ",
    },
    {
      id: 2,
      src: PomodoroApp,
      style: "m-4",
    },
    {
      id: 3,
      src: TodoApp,
      style: "mt-6 ml-3"
    },
    {
      id: 4,
      src: WeatherApplication,
      style: "mt-5 "
    },
    {
      id: 5,
      src: ThemeSwitcher,
      style :"mt-1"
    },
    {
      id: 6,
      src: TicTacToe,
      style: "mt-12 ,ml-2"
    },
    {
      id: 7,
      src: PasswordGenerator,
      style : "mt-5"
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-base md:text-xl">
            Check out some of my Projects Right Here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, style}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className={`w-1/2 duration-200 hover:scale-105 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${style}`}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;