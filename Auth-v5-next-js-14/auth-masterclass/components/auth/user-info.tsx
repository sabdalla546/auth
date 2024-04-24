import { User } from "next-auth";
import { Card, CardContent, CardHeader } from "../ui/card";

interface userInfoProps {
  user?: User;
  label: string;
}

export const UserInfo = ({ user, label }: userInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl-font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm fond-md">id</p>
          <p>{user?.id}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm fond-md">name</p>
          <p>{user?.name}</p>
        </div>
      </CardContent>
    </Card>
  );
};
