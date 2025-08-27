import React from "react";
const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <p className=" text-sm sm:text-xl font-extralight whitespace-nowrap">
          {formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-sm sm:text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
