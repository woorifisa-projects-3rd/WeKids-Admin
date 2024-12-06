import React from "react";
import CustomButton from "../../_components/CustomButton";
import UserInfo from "./UserInfo";
import Image from "next/image";

const UserInfoView = ({ data, handleCardState, handleAccountState, handleMemberState }) => {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <div className="flex flex-col items-center gap-y-10 border-2 rounded-md p-5">
        <div className="text-center font-bold text-B-28 text-gray-600">회원 정보</div>
        <div className="flex w-full justify-center gap-x-5 px-10">
          <div className="w-2/5 border-4 border-main01 rounded-md p-5">
            <UserInfo title="회원 번호" value={data.member.memberId} />
            <UserInfo title="회원 이름" value={data.member.name} />
            <UserInfo title="회원 유형" value={data.member.role.substring(5)} />
            <UserInfo title="이메일" value={data.member.email} />
            <UserInfo title="전화번호" value={data.member.phone} />
          </div>
          <div className="w-2/5 border-4 border-main01 rounded-md p-5">
            <UserInfo title="회원 상태" value={data.member.memberState} />
            <UserInfo title="비활성일시" value={data.member.inactiveDate} />
            <UserInfo title="생성일시" value={data.member.createdAt} />
            <UserInfo title="수정일시" value={data.member.updatedAt} />
          </div>
          <div className="w-1/5 flex justify-center items-center border-4 border-main01 rounded-md p-5">
            <Image
              src={data.member.profile || "/images/dadapingImg.svg"}
              alt="프로필 이미지"
              width={300}
              height={0}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <CustomButton
            size="medium"
            rounded
            onClick={async () => {
              if (data.member?.memberId) {
                await handleMemberState(
                  data.member.memberId,
                  data.member.memberState === "ACTIVE" ? "SLEEP" : "ACTIVE"
                );
              }
            }}
          >
            {data.member.memberState === "ACTIVE" ? "회원 비활성화" : "회원 활성화"}
          </CustomButton>
          <CustomButton
            color="red"
            size="medium"
            rounded
            onClick={async () => {
              if (data.member?.memberId) {
                await handleMemberState(data.member.memberId, "LEAVE");
              }
            }}
          >
            회원 탈퇴
          </CustomButton>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-10 border-2 rounded-md p-5">
        <div className="text-center font-bold text-B-28 text-gray-600">회원 계좌 정보</div>
        <div className="flex w-full justify-center gap-x-5 px-10">
          <div className="w-1/2 border-4 border-main01 rounded-md p-5">
            <UserInfo title="계좌 아이디" value={data.account?.accountId} />
            <UserInfo title="계좌 번호" value={data.account?.accountNumber} />
            <UserInfo title="계좌 상태" value={data.account?.state} />
          </div>
          <div className="w-1/2 border-4 border-main01 rounded-md p-5">
            <UserInfo title="비활성일시" value={data.account?.inactiveDate} />
            <UserInfo title="생성일시" value={data.account?.createdAt} />
            <UserInfo title="수정일시" value={data.account?.updatedAt} />
          </div>
        </div>
        <CustomButton
          size="medium"
          rounded
          onClick={async () => {
            if (data.account?.accountId) {
              await handleAccountState(
                data.account.accountId,
                data.account.state === "ACTIVE" ? "INACTIVE" : "ACTIVE"
              );
            }
          }}
        >
          {data.account?.state === "ACTIVE" ? "계좌 비활성화" : "계좌 활성화"}
        </CustomButton>
      </div>

      <div className="flex flex-col items-center gap-y-10 border-2 rounded-md p-5">
        <div className="text-center font-bold text-B-28 text-gray-600">회원 카드 정보</div>
        <div className="flex w-full justify-center gap-x-5 px-10">
          <div className="w-1/2 border-4 border-main01 rounded-md p-5">
            <UserInfo title="카드 아이디" value={data.card?.cardId} />
            <UserInfo title="카드 번호" value={data.card?.cardNumber} />
            <UserInfo title="카드 상태" value={data.card?.state} />
          </div>
          <div className="w-1/2 border-4 border-main01 rounded-md p-5">
            <UserInfo title="비활성일시" value={data.card?.inactiveDate} />
            <UserInfo title="생성일시" value={data.card?.createdAt} />
            <UserInfo title="수정일시" value={data.card?.updatedAt} />
          </div>
        </div>
        <CustomButton
          size="medium"
          rounded
          onClick={async () => {
            if (data.card?.cardId) {
              await handleCardState(
                data.card.cardId,
                data.card.state === "ACTIVE" ? "INACTIVE" : "ACTIVE"
              );
            }
          }}
        >
          {data.card?.state === "ACTIVE" ? "카드 비활성화" : "카드 활성화"}
        </CustomButton>
      </div>

      <div className="flex flex-col items-center gap-y-10 border-2 rounded-md p-5">
        <div className="text-center font-bold text-B-28 text-gray-600 ">회원 디자인</div>
        <div className="flex flex-col w-1/2 justify-center gap-x-5 px-10 border-4 border-main01 rounded-md p-5">
          <UserInfo title="디자인 아이디" value={data.design?.designId} />
          <UserInfo title="색" value={data.design?.color} />
          <UserInfo title="캐릭터" value={data.design?.character} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-10 border-2 rounded-md p-5">
        <div className="text-center font-bold text-B-28 text-gray-600">가족 관계</div>
        {data.family.map((user, index) => (
          <div
            key={index}
            className="flex flex-col w-1/2 justify-center gap-x-5 px-10 border-4 border-main01 rounded-md p-5"
          >
            <UserInfo title="이름" value={user.name} />
            <UserInfo title="전화번호" value={user.phone} />
            <UserInfo title="역할" value={user.role.substring(5)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoView;
