import { NavBar } from "./_component/nav-bar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center gap-y-10 bg-sky-500 ">
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
