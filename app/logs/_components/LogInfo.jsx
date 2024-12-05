import React, { useState } from "react";

const LogInfo = ({ title, value }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex flex-col w-full border-2 rounded-md p-5 bg-gray-800 text-orange-500">
      <div className="flex">
        <span className="w-1/5 font-bold">{title}</span>
        <span
          className={`w-4/5 ${
            collapsed ? "line-clamp-1" : "whitespace-normal"
          } break-words overflow-hidden`}
        >
          {value}
        </span>
      </div>
      <button className="text-sm text-blue-400 mt-2 self-end" onClick={toggleCollapse}>
        {collapsed ? "더 보기" : "접기"}
      </button>
    </div>
  );
};

export default LogInfo;
