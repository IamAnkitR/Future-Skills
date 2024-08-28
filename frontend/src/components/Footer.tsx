import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6 rounded-b-2xl m-1">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between text-left">
          <div>
            <h5 className="font-bold text-xl">Abstract</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Branches
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl">Resources</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Blog
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Help Center
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Release Notes
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl">Community</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Twitter
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  LinkedIn
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Dribbble
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl">Company</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  About Us
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Careers
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Legal
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400 font-semibold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto max-w-40 text-left">
            <img
              src="/logo.png"
              className="max-h-7 mb-2 rounded-lg"
              alt="Logo"
            />
            <p className="text-gray-500 text-sm font-semibold">
              &copy; Copyright 2022 Abstract Studio Design, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
