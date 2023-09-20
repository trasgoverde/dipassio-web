import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return ( 
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed 
        md:inset-y-0 z-80 bg-blue-900">
          
          <div>
          <UserButton afterSignOutUrl="/" />
            Hello Sidebar
           </div> 
        </div>
        <main className="md:pl-72">
          Hello Content
          </main>
      </div>
     );
  }
   
  export default DashboardLayout  