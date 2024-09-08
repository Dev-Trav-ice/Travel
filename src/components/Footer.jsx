import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black px-4 py-10 md:px-[100px]">
      <div className=" flex items-center justify-between">
        <h1 className="text-xl text-white">
          Tra<span className="text-green-600">vel</span>
        </h1>
        <div>
          <h1 className="text-gray-300 font-semibold">Useful links</h1>
          <ul className="text-gray-500">
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-300 font-semibold">Social links</h1>
          <ul className="text-gray-500">
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="m-4" />
      <div className="py-2">
        <h2 className="text-sm text-gray-600 text-center">
          Developed by Butunyi. Copyright 2024
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
