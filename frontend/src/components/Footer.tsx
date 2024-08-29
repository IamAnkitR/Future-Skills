import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6 rounded-b-2xl m-1 h-[40vh]">
      <div className="max-w-10xl mx-auto">
        <div className="flex justify-around text-left">
          <div>
            <h5 className="font-bold text-3xl">Abstract</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Branches
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-3xl">Resources</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Blog
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Help Center
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Release Notes
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-3xl">Community</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Twitter
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  LinkedIn
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Dribbble
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-3xl">Company</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  About Us
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Careers
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Legal
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold text-xl">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto max-w-80 text-left">
            <img
              src="/logo.png"
              className="max-h-10 mb-2 rounded-lg"
              alt="Logo"
            />
            <p className="text-gray-500 font-semibold text-xl ">
              &copy; Copyright 2022
              <div>
                <p>Abstract Studio Design, Inc.</p>
                <p> All rights reserved.</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
