import React from "react";
import UserSearchView from "./_components/UserSearchView";

const UserPage = () => {
  return (
    <div className="flex flex-col p-20 gap-y-10">
      <div className="text-center font-bold text-B-32 text-gray-600">회원 관리</div>
      <UserSearchView />
    </div>
  );
};

export default UserPage;
