import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "New York" },
    { id: 2, name: "Singapore" },
    { id: 3, name: "London" },
    { id: 4, name: "New Delhi" },
    { id: 5, name: "Paris" },
  ];

  return (
    <div className="flex  justify-center sm:justify-around my-3 gap-2 sm:gap-2 px-2 sm:px-0">
      {cities.map((city) => (
        <button
          key={city.id}
          className="whitespace-nowrap text-sm sm:text-base font-medium hover:bg-gray-700/20 px-2 py-1 rounded-md transition"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
