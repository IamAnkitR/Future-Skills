import React from "react";
import { Card } from "../interfaces/Card";

interface HelpCardProps {
  card: Card;
}

export const HelpCard: React.FC<HelpCardProps> = ({ card }) => {
  return (
    <div className="rounded-lg shadow-sm w-full h-full">
      <h2 className="text-2xl font-bold text-gray-800 pt-4 px-6 pb-2">
        {card.title}
      </h2>
      <hr className="border border-gray-200" />
      <p className="text-gray-600 text-xl font-medium mt-2 px-6">
        {card.description}
      </p>
    </div>
  );
};
