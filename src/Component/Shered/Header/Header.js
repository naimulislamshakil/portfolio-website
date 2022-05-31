import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navBarItem = (
    <>
      <li>
        <Link to="/" className=" font-bold text-lg hover:bg-primary">
          Home
        </Link>
      </li>
      <li>
        <a href="#about" className=" font-bold text-lg hover:bg-primary">
          About Me
        </a>
      </li>
      <li>
        <a href="#best" className=" font-bold text-lg hover:bg-primary">
          Best Website
        </a>
      </li>
      <li>
        <a href="#contact" className=" font-bold text-lg hover:bg-primary">
          Contact Us
        </a>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-200 mb-2">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBarItem}
            </ul>
          </div>
          <Link
            to="/"
            class="logo btn btn-ghost normal-case text-2xl text-primary "
          >
            Naimul Islam
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navBarItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
