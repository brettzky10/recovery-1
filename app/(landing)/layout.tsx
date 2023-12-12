import { LandingNavbar } from "./_components/landing-navbar";

const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-[#111827] overflow-auto">
        <div className=" h-screen w-full">
        <LandingNavbar />
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;