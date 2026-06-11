import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const EMAIL_APP_NAME = "email app";

function getMailtoFromClick(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return null;

  const link = target.closest<HTMLAnchorElement>('a[href^="mailto:"]');
  if (!link) return null;

  return link.href;
}

export function MailPermissionModal() {
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  useEffect(() => {
    const handleMailClick = (event: MouseEvent) => {
      const href = getMailtoFromClick(event);
      if (!href) return;

      event.preventDefault();
      setMailtoHref(href);
    };

    document.addEventListener("click", handleMailClick, true);
    return () => document.removeEventListener("click", handleMailClick, true);
  }, []);

  useEffect(() => {
    if (!mailtoHref) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMailtoHref(null);
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [mailtoHref]);

  const openEmailApp = () => {
    if (!mailtoHref) return;
    const href = mailtoHref;
    setMailtoHref(null);
    window.location.href = href;
  };

  return (
    <AnimatePresence>
      {mailtoHref && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mail-permission-title"
        >
          <button
            type="button"
            aria-label="Close email permission modal"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMailtoHref(null)}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl glass border border-white/10 bg-slate-950/85 p-6 shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-chelsea-light/70 to-transparent" />

            <button
              type="button"
              aria-label="Close"
              onClick={() => setMailtoHref(null)}
              className="absolute right-4 top-4 rounded-lg p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-chelsea/20 text-white">
              <Mail className="h-6 w-6" />
            </div>

            <h2
              id="mail-permission-title"
              className="mb-3 text-2xl font-bold tracking-tight text-white"
            >
              Please can I access your {EMAIL_APP_NAME}?
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-white/60">
              This will open your device&apos;s default email app so you can send
              me a message directly.
            </p>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setMailtoHref(null)}
                className="h-11 rounded-xl border border-white/10 text-white hover:bg-white/10"
              >
                Not Now
              </Button>
              <Button
                type="button"
                onClick={openEmailApp}
                className="h-11 rounded-xl bg-white px-5 font-bold text-chelsea hover:bg-white/90"
              >
                Allow Access
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
