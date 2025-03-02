import Sidebar from "@/components/(dashboard)/Sidebar";
import Topbar from "@/components/(dashboard)/Topbar";
import Footer from "@/components/(dashboard)/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 text-slate-800">
          {children}
        </main>
        <Footer />
      </div>

    </div>
  );
}
