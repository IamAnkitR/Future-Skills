import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6 rounded-b-2xl m-1">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around text-center">
          <div>
            <h5 className="font-bold">Abstract</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Branches
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Resources</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Blog
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Help Center
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Release Notes
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Community</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Twitter
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  LinkedIn
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Dribbble
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Company</h5>
            <ul>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  About Us
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Careers
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Legal
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500">
            &copy; Copyright 2022 Abstract Studio Design, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
