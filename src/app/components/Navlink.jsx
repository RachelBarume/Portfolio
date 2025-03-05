// Navlink.jsx
"use client";
import React from "react";

const Navlink = ({ href, title, onClick }) => {
  return (
    <a
      href={`#${href}`}
      onClick={onClick}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-large"
    >
      {title}
    </a>
  );
};

export default Navlink;
