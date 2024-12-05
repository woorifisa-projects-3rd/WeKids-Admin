"use client";

import CustomButton from "@/app/_components/CustomButton";
import React, { useState } from "react";

const LogSearchBar = ({ handleSearch }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [logLevel, setLogLevel] = useState("ALL"); // 로그 레벨 상태 추가

  const handleSearchBtn = async () => {
    await handleSearch(startDate, endDate, logLevel);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 border-2 rounded-md space-y-4 ">
      <div className="flex gap-x-3 w-full items-center">
        <label className="text-B-18 text-center w-1/5">시작 날짜</label>
        <input
          type="date"
          className="border w-4/5 p-2 rounded-md"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />
      </div>
      <div className="flex gap-x-3 w-full items-center">
        <label className="text-B-18 text-center w-1/5">종료 날짜</label>
        <input
          type="date"
          className="border w-4/5 p-2 rounded-md"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />
      </div>
      <div className="flex gap-x-3 w-full items-center">
        <label className="text-B-18 text-center w-1/5">로그 레벨</label>
        <select
          className="border w-4/5 p-2 rounded-md"
          value={logLevel}
          onChange={(e) => setLogLevel(e.target.value)}
        >
          <option value="ALL">전체</option>
          <option value="INFO">INFO</option>
          <option value="WARN">WARN</option>
          <option value="ERROR">ERROR</option>
        </select>
      </div>
      <CustomButton color="main" rounded onClick={handleSearchBtn}>
        검색
      </CustomButton>
    </div>
  );
};

export default LogSearchBar;
