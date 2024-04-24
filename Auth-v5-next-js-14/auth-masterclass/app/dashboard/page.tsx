"use client";

//import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  //const session = useSession();
  // const user = useCurrentUser();

  return <div className="bg-white p-10 rounded-xl">dashboard</div>;
};

export default Dashboard;
