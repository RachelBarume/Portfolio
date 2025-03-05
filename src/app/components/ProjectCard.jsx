import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, language, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#121212] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center text-center p-4">
          <div className="hidden group-hover:block text-white font-light">
            <p className="text-normal text-white">{description}</p>
          </div>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#aca6b9] py-6 px-4">
        <h5 className="text-xl text-white font-semibold mb-2">{title}</h5>
        <p className="text-white">{language}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
