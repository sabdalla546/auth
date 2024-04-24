"use client";

import { useRouter } from "next/navigation";

const NotFoundBage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-2 ">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you are lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600 ">
        Let get you back{" "}
        <span className="text-blue-500 cursor-pointer" onClick={onClick}>
          home
        </span>
        .
      </p>
    </div>
  );
};

export default NotFoundBage;
