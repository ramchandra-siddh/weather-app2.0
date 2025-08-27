import React, { useState, useEffect } from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const [iconSize, setIconSize] = useState(18);
  const [iconSizeBelow, setIconSizeBelow] = useState(30);
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed} ${units === "metric" ? "m/s" : "mph"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Rise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Set",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },

    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  useEffect(() => {
    const updateSize = () => {
      setIconSize(window.innerWidth < 640 ? 10 : 18);
      setIconSizeBelow(window.innerWidth < 640 ? 20 : 30);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p className="text-xl sm:text-3xl">{details}</p>
      </div>
      <div className="flex flex-row items-center justify-center sm:justify-between gap-10 py-3">
        <img src={icon} alt="weather icon" className="w-10 sm:w-20" />

        <p className="text-2xl sm:text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-1 sm:space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={iconSize} className="mr-1" />
              {`${title}:`}
              <span className="font-medium ml-1 whitespace-nowrap ">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-row items-center justify-center space-x-1 sm:space-x-10 mt-6 ">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row  items-center  gap-4"
          >
            <Icon size={iconSizeBelow} />
            <p className="font-light ml-1">
              {`${title}:`}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
