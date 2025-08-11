import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-[254px] hidden md:block flex-none transition-all duration-300 ease-in-out shadow-sm">
        <Sidebar />
      </div>

      {/* Main content */}
      <section className="flex-grow flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-grow overflow-y-auto p-3 md:bg-gray-100">
          {children}
        </div>
      </section>
    </div>
  );
}