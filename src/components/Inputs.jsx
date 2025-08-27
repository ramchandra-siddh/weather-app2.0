import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const updateSize = () => {
      setIconSize(window.innerWidth < 640 ? 22 : 30);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search by city..."
          className="text-gray-500 text-sm sm:text-xl font-light px-2 py-1 sm:p-2  w-[200px] sm:w-full shadow-xl capitalize focus:outline-none placeholder:lowercase bg-white"
        />
        <BiSearch
          size={iconSize}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={iconSize}
          className="cursor-pointer transition ease-out hover:scale-125"
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
