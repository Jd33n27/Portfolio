import { ClickRipple } from "@/components/Animations/ClickRipple";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen min-w-full bg-business-gradient text-white">
      <ClickRipple />
      <Navbar />
      <main className="grid place-content-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}