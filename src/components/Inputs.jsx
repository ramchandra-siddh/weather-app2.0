import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const [iconSize, setIconSize] = useState(30);

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
        setCity("");
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center gap-2">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search by city..."
          className="text-gray-500 text-sm sm:text-xl font-light px-2 py-1 sm:p-2  w-[150px] sm:w-full shadow-xl capitalize focus:outline-none placeholder:lowercase bg-white flex-1"
        />
        <BiSearch
          size={iconSize}
          className="cursor-pointer transition ease-out hover:scale-125 shrink-0 w-5 sm:w-8"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={iconSize}
          className="cursor-pointer transition ease-out hover:scale-125 shrink-0 w-5 sm:w-8"
          onClick={handleLocationClick}
        />
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            className="text-sm sm:text-2xl font-medium transiton ease-out hover:scale-x-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-sm sm:text-2xl font-medium mx-1">|</p>
          <button
            className="text-sm sm:text-2xl font-medium transiton ease-out hover:scale-x-125"
            onClick={() => setUnits("imperial")}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
