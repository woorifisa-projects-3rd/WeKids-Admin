import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full py-5 px-10 bg-main02 text-white flex justify-between items-center">
      <Link href="/" className="text-B-32 flex gap-x-3 items-center">
        <Image src="/icons/favicon.svg" alt="파비콘" width={40} height={40} />
        WeKids 관리자
      </Link>
      <div className="flex gap-x-5 text-B-20">
        <Link href="/users">회원 관리</Link>
        <Link href="/logs">로그 관리</Link>
      </div>
    </div>
  );
};

export default Header;
