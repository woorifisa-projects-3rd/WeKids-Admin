import { auth } from "@/auth";
import React from "react";
import LoginForm from "./_components/LoginForm";
import Box from "./_components/Box";
import Link from "next/link";

const AdminPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "ADMIN") {
    return <LoginForm />;
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-20">
      <div className="text-B-32 text-gray-600">WeKids 관리자 페이지</div>
      <div className="flex w-full h-full justify-center items-center gap-x-10">
        <Link href="/users" className="flex w-1/3 h-1/2 justify-center items-center text-center">
          <Box>회원 관리</Box>
        </Link>
        <Link href="/logs" className="flex w-1/3 h-1/2 justify-center items-center text-center">
          <Box>로그 관리</Box>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
