import React from "react";

const Box = ({ children }) => {
  return (
    <div className="bg-main01 text-white flex justify-center items-center text-B-32 w-full h-full rounded-3xl">
      {children}
    </div>
  );
};

export default Box;
