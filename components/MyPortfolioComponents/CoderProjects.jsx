import React from "react";

const CoderProjects = () => {
  return (
    <ul className="grid gap-8 lg:grid-cols-2">
      <li className="gap-8 sm:flex">
        <div className="w-full h-60">
          <img
            src="./images/SignIn.png"
            className="w-full h-full object-cover object-center shadow-md rounded-xl"
          />
        </div>
        <div className="mt-4 sm:mt-0">
          <h4 className="text-2xl text-slate-700 font-bold md:text-3xl">
            Sign-in Page
          </h4>
          <p className="py-4 text-slate-700 text-lg">
            This Sign-in Page showcases my skills in creating functional and
            visually appealing interfaces using React and Tailwind CSS.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a>
              <i className="text-2xl cursor-pointer hover:text-blue-400 fa-brands fa-react"></i>
            </a>
            <a href="https://github.com/sebiamr22/chesscoders-ui/tree/gabi">
              <i className="text-2xl cursor-pointer hover:text-slate-700 fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </li>
      <li className="gap-8 sm:flex">
        <div className="w-full h-60">
          <img
            src="./images/Sidebar.png"
            className="w-full h-full object-cover object-center shadow-md rounded-xl"
          />
        </div>
        <div className="mt-4 sm:mt-0">
          <h4 className="text-2xl text-slate-700 font-bold md:text-3xl">
            Sidebar with header
          </h4>
          <p className="py-4 text-slate-700 text-lg">
            The sidebar is fully responsive, optimized for all screen sizes, and
            includes a user profile section with an avatar and search bar.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a>
              <i className="text-2xl cursor-pointer hover:text-blue-400 fa-brands fa-react"></i>
            </a>
            <a href="https://github.com/sebiamr22/chesscoders-ui/tree/gabi">
              <i className="text-2xl cursor-pointer hover:text-slate-700 fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </li>
      <li className="gap-8 sm:flex">
        <div className="w-full h-60">
          <img
            src="./images/HomePage.png"
            className="w-full h-full object-cover object-center shadow-md rounded-xl"
          />
        </div>
        <div className="mt-4 sm:mt-0">
          <h4 className="text-2xl text-slate-700 font-bold md:text-3xl">
            Home Page
          </h4>
          <p className="py-4 text-slate-700 text-lg">
            The page shows an intuitive search functionality and a modern
            design, making it easy to integrate these components into your
            projects.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a>
              <i className="text-2xl cursor-pointer hover:text-blue-400 fa-brands fa-react"></i>
            </a>
            <a href="https://github.com/sebiamr22/chesscoders-ui/tree/CC-17">
              <i className="text-2xl cursor-pointer hover:text-slate-700 fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </li>
      <li className="gap-8 sm:flex">
        <div className="w-full h-60">
          <img
            src="./images/Lemon2.png"
            className="w-full h-full object-cover object-center shadow-md rounded-xl"
          />
        </div>
        <div className="mt-4 sm:mt-0">
          <h4 className="text-2xl text-slate-700 font-bold md:text-3xl">
            Little Lemon
          </h4>
          <p className="py-4 text-slate-700 text-lg">
            This project was created during Meta's Coursera Front-End
            Development course, with React components.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a>
              <i className="text-2xl cursor-pointer hover:text-blue-400 fa-brands fa-react"></i>
            </a>
            <a href="https://github.com/VladGabi17/CapstoneProjectApp/tree/main/Meta-Frontend-Developer-Capstone-Starter">
              <i className="text-2xl cursor-pointer hover:text-slate-700 fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CoderProjects;