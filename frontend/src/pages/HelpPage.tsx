import React, { useState, useEffect } from "react";
import { HelpCard } from "../components/HelpCard";
import { Card } from "../interfaces/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HelpPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    fetch(`${backendUrl}/api/cards`)
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100">
        <div className="text-center pt-[6vh] bg-[#DADBF0] pb-[4vh]">
          <h1 className="text-5xl font-semibold text-gray-900 mb-[2vh]">
            How can we help?
          </h1>
          <div className="relative w-full md:w-1/2 mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-[30vw] p-3 mb-6 border border-gray-300 rounded-sm pr-10" // add padding-right for the arrow
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 rotate-90"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L3.707 11.707a1 1 0 11-1.414-1.414l7-7A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-[13vh] bg-[#F4F6F8">
          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className="w-[25vw] h-[200px] bg-[#f2f4f7] border border-gray-300 shadow-sm rounded-2xl"
                >
                  <HelpCard card={card} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
