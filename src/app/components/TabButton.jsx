import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white border-b border-purple-300" : "text-[#ADB7BE]";

  return (
    <button 
      onClick={selectTab} 
      className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
