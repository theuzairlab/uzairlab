import React from "react";
import "tailwindcss/tailwind.css";

const MovingLines = () => {
  return (
    <div className="absolute  left-[-3%] w-[95%] h-full animate-moveLine">
      {[...Array(9)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-full bg-[#b09c9c16]"
          style={{ left: `${(i + 1) * 10}%` }}
        ></span>
      ))}
    </div>
  );
};

export default MovingLines;
