"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex  items-center justify-center gap-x-4">
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={() => onClick("google")}
        size={"lg"}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={() => onClick("github")}
        size={"lg"}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
