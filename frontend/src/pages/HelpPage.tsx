import React, { useState, useEffect } from "react";
import { HelpCard } from "../components/HelpCard";
import { Card } from "../interfaces/Card";

export const HelpPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Use environment variable for the backend URL
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch cards from the backend API
    fetch(`${backendUrl}/api/cards`)
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How can we help?
        </h1>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-1/2 p-3 mb-6 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCards.map((card) => (
          <HelpCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
