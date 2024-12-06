import React from "react";

const Box = ({ children }) => {
  return (
    <div className="bg-main02 text-white flex justify-center items-center text-B-32 w-full h-full rounded-3xl hover:bg-main01">
      {children}
    </div>
  );
};

export default Box;
