import React from "react";
import LogSearchView from "./_components/LogSearchView";

const LogPage = () => {
  return (
    <div className="flex flex-col p-20 gap-y-10">
      <div className="text-center font-bold text-B-32 text-gray-600">로그 관리</div>
      <LogSearchView />
    </div>
  );
};

export default LogPage;
