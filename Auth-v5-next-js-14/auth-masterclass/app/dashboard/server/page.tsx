import { currentUser } from "@/lib/auth";
const ServerPage = async () => {
  const user = await currentUser();
  return (
    <div className="bg-white w-[600px] rounded-lg p-5">
      <p>{user?.email}</p>
      <p>{user?.name}</p>
      <p>{user?.id}</p>
    </div>
  );
};

export default ServerPage;
