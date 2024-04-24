"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathName === "/dashboard/server" ? "default" : "outline"}
        >
          <Link href={"/dashboard/server"}>Server</Link>
        </Button>

        <Button
          asChild
          variant={pathName === "/dashboard" ? "default" : "outline"}
        >
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
