import React from "react";
import LogInfo from "./LogInfo";

const LogListView = ({ logs }) => {
  const keys = Object.keys(logs);

  return (
    <div className="flex flex-col w-full h-full gap-5">
      {keys.map((key, index) => (
        <LogInfo key={index} title={key} value={logs[key]} />
      ))}
    </div>
  );
};

export default LogListView;
