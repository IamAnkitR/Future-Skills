import React from "react";
import { Card } from "../interfaces/Card";

interface HelpCardProps {
  card: Card;
}

export const HelpCard: React.FC<HelpCardProps> = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
      <p className="text-gray-600 mt-2">{card.description}</p>
    </div>
  );
};
