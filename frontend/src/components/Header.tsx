import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-black p-4 flex justify-between items-center rounded-t-2xl mx-1 mt-1">
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Abstract Logo"
          className="h-6 md:h-8 ml-2 md:ml-[5vw]"
        />
        <a href="/" className="text-gray-200 text-sm md:text-xl font-semibold">
          Abstract <span className="text-gray-400">| Help Center</span>
        </a>
      </div>
      <button className="bg-gray-800 text-gray-200 text-sm md:text-xl font-medium px-2 py-1 md:px-4 md:py-2 rounded-lg border border-gray-600 hover:bg-gray-700 mr-4 md:mr-[15vw]">
        Submit a request
      </button>
    </header>
  );
};
