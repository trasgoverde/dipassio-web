import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page</p>
      <UserButton />
    </div>
  );
};

export default DashboardPage;