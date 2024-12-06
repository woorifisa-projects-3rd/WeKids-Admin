"use client";
import React, { useState } from "react";
import UserInfoView from "./UserInfoView";
import { fetchMembers, modifyAccountState, modifyCardState, modifyMemberState } from "@/apis/admin";
import UserSearchBar from "./UserSearchBar";

const UserSearchView = () => {
  const [data, setData] = useState(null);

  const handleSearch = async (name, phone) => {
    if (name === "" || phone === "") {
      window.alert("이름과 전화번호를 모두 입력해주세요!");
    } else {
      try {
        const response = await fetchMembers(name, phone);
        console.log(response);
        setData(response);
      } catch (error) {
        window.alert("존재하지 않은 회원입니다.");
      }
    }
  };

  const handleCardState = async (cardId, state) => {
    try {
      const response = await modifyCardState(cardId, state);
      const newData = { ...data };
      newData.card.state = state;
      newData.card.inactiveDate = response.inactiveDate;
      setData(newData);
    } catch (error) {
      window.alert("카드 상태 변경에 실패했습니다.");
    }
  };

  const handleAccountState = async (accountId, state) => {
    try {
      const response = await modifyAccountState(accountId, state);
      const newData = { ...data };
      newData.account.state = state;
      newData.account.inactiveDate = response.inactiveDate;
      setData(newData);
    } catch (error) {
      window.alert("계좌 상태 변경에 실패했습니다.");
    }
  };

  const handleMemberState = async (memberId, state) => {
    try {
      const response = await modifyMemberState(memberId, state);
      const newData = { ...data };
      newData.member.memberState = state;
      newData.member.inactiveDate = response.inactiveDate;
      setData(newData);
    } catch (error) {
      window.alert("회원 상태 변경에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <UserSearchBar handleSearch={handleSearch} />
      {data ? (
        <UserInfoView
          data={data}
          handleCardState={handleCardState}
          handleAccountState={handleAccountState}
          handleMemberState={handleMemberState}
        />
      ) : null}
    </div>
  );
};

export default UserSearchView;
