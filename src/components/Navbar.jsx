import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-4 left-0 right-0 md:max-w-[1200px] md:mx-auto bg-white flex items-center justify-between p-2 md:px-4">
      {!isOpen && (
        <h1 className="text-3xl  font-bold cursor-default">
          Tra<span className="text-green-600">vel</span>
        </h1>
      )}
      <div className="hidden md:flex gap-6">
        {links.map((link, index) => {
          return (
            <Link
              className="text-gray-700 p-1 hover:bg-gray-600 hover:text-white rounded-md"
              to={link.path}
              key={index}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="md:hidden w-full flex relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="absolute top-5 right-5" />
          ) : (
            <FaBars className="absolute top-[-5px] right-5" />
          )}
        </button>
        {isOpen && (
          <div className="md:hidden flex flex-col bg-white space-y-6 py-4">
            {links.map((link, index) => {
              return (
                <Link
                  className="text-gray-700 p-1 hover:bg-gray-600 hover:text-white rounded-md"
                  to={link.path}
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
