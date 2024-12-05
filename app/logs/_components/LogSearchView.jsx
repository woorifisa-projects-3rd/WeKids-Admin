"use client";
import React, { useState } from "react";
import LogSearchBar from "./LogSearchBar";
import LogListView from "./LogListView";
import { fetchLogs } from "@/apis/admin";

const LogSearchView = () => {
  const [logs, setLogs] = useState();

  const handleSearch = async (startDate, endDate, logLevel) => {
    const response = await fetchLogs(startDate, endDate, logLevel);

    setLogs(response);
  };

  return (
    <div className="flex flex-col gap-10">
      <LogSearchBar handleSearch={handleSearch} />
      {logs ? <LogListView logs={logs} /> : null}
    </div>
  );
};

export default LogSearchView;
