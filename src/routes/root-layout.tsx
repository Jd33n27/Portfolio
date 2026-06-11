import { ClickRipple } from "@/components/Animations/ClickRipple";
import Footer from "@/components/Footer";
import { MailPermissionModal } from "@/components/MailPermissionModal";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen w-full bg-business-gradient text-white">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div aria-hidden className="noise-overlay" />
      <ScrollProgress />
      <ScrollToTop />
      <ClickRipple />
      <MailPermissionModal />
      <Navbar />
      <main id="main-content" className="relative z-10 w-full pb-safe">
        <PageTransition key={pathname}>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
