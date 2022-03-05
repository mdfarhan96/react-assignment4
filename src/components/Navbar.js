import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="student" className="std">
        STUDENTS
      </Link>
      <Link to="contact-us" className="con">
        CONTACT US
      </Link>
    </nav>
  );
};
