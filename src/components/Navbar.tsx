import {
  Home,
  User,
  // Briefcase,
  FileTextIcon,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    // Projects nav item intentionally paused while the portfolio is repositioned.
    // { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Resume", href: "/resume", icon: FileTextIcon },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jd33n27",
      name: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/MusaJamaldeen",
      name: "LinkedIn",
    },
    {
      icon: XIcon,
      href: "https://x.com",
      name: "X (Twitter)",
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/+2348077127417",
      name: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:musajamaldeen627@gmail.com",
      name: "Email",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 h-[60vh] py-8 w-[4.5rem] flex-col items-center justify-center gap-8 rounded-2xl glass glass-hover z-50 border border-white/10"
        aria-label="Primary navigation"
      >
        <nav className="flex flex-col gap-2 justify-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                aria-label={link.name}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "p-3 rounded-xl transition-all duration-300 relative group",
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-white/15 border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-5 h-5 relative z-10" />
                <span className="absolute left-14 top-1/2 -translate-y-1/2 glass text-gray-200 text-xs font-bold px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm z-50 whitespace-nowrap">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      <motion.aside
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 h-[60vh] w-[4.5rem] flex-col items-center justify-center py-8 rounded-2xl glass glass-hover z-50 border border-white/10"
        aria-label="Social links"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                className="text-white/60 relative group hover:text-white transition-colors p-2.5 rounded-lg hover:bg-white/10"
              >
                <Icon className="w-5 h-5" />
                <span className="absolute right-14 top-1/2 -translate-y-1/2 glass text-gray-200 text-xs font-bold px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm whitespace-nowrap z-50">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </motion.aside>

      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2"
      >
        <div className="glass backdrop-blur-xl rounded-2xl shadow-2xl px-4 py-3 flex items-center justify-around border border-white/10 max-w-md mx-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                aria-label={link.name}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 transition-colors p-2.5 rounded-xl min-w-[3rem]",
                  active
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};
