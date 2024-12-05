"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import CustomButton from "./_components/CustomButton";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-between p-5">
      <h2 className="text-B-32">Error</h2>
      <p>오류가 발생했습니다.</p>
      <CustomButton size="medium" onClick={() => reset()}>
        Try again
      </CustomButton>
    </div>
  );
}
