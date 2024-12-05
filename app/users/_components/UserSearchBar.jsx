import CustomButton from "@/app/_components/CustomButton";
import React, { useState } from "react";

const UserSearchBar = ({ handleSearch }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSearchBtn = async () => {
    await handleSearch(name, phone);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 border-2 rounded-md space-y-4 ">
      <div className="flex space-x-3 w-full items-center">
        <label className="text-B-18 text-center w-1/5">이름</label>
        <input
          className="border w-4/5 p-2 rounded-md"
          value={name}
          placeholder="이름을 입력해주세요."
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex space-x-3 w-full items-center">
        <label className="text-B-18 text-center w-1/5">전화번호</label>
        <input
          className="border w-4/5 p-2 rounded-md'"
          value={phone}
          placeholder="전화번호를 입력해주세요."
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <CustomButton color="main" rounded onClick={handleSearchBtn}>
        검색
      </CustomButton>
    </div>
  );
};

export default UserSearchBar;
