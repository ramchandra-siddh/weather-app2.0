import React from "react";
const Forecast = ({ title, data }) => {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase whitespace-nowrap">{title}</p>
      </div>

      {/* Responsive line */}
      <hr className="my-1 max-sm:ml-[-90px] max-sm:w-[220%] " />

      {/* Forecast row */}
      <div className="flex justify-start gap-10 sm:justify-between max-sm:ml-[-85px]">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between max-sm:ml-[-10px]max-sm:w-[100px] sm:w-auto"
          >
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
