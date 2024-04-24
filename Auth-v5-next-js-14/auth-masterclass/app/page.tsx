import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-y-6 bg-sky-500">
      <h1
        className={cn(
          "text-6xl font-semibols text-white drop-shdow-md",
          font.className
        )}
      >
        Auth
      </h1>
      <p className="text-white text-lg">this is a simple Authertcation</p>
      <div>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
