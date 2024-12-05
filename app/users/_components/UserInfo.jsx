import React from "react";

const UserInfo = ({ title, value }) => {
  return (
    <div className="flex w-full p-5">
      <span className="w-1/2 text-B-20 text-center">{title}</span>
      <span className="w-1/2 break-all text-R-20">{value}</span>
    </div>
  );
};

export default UserInfo;
