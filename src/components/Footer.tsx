import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useReducedMotion } from "@/hooks/useReducedMotion";

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function ContactBlock({
  icon: Icon,
  label,
  value,
  href,
  copyValue,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  copyValue?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    const success = await copyToClipboard(copyValue);
    if (!success) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-6 h-6 text-white group-hover:text-chelsea-light transition-colors" />
        <h3 className="font-bold text-xl text-white">{label}</h3>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={href}
          className="text-gray-200 text-base md:text-lg hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
        >
          {value}
        </a>
        {copyValue && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${label.toLowerCase()}`}
            className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const reducedMotion = useReducedMotion();
  const animatedText = useTypewriter(
    ["Profitable.", "Scalable.", "Fast.", "Secure."],
    100,
    50,
    2000,
  );

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-chelsea/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-5 min-h-22 md:min-h-0">
            Make it{" "}
            <span className="text-white/40">
              {reducedMotion ? "Profitable." : animatedText}
              {!reducedMotion && (
                <span className="animate-pulse text-chelsea-light">|</span>
              )}
            </span>
          </h2>
          <p className="text-white/60 mx-auto text-lg md:max-w-xl mb-12 text-wrap text-center">
            You have a vision. I have the engineering. Let&apos;s execute.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto mb-12">
            <ContactBlock
              icon={Mail}
              label="Email"
              value="musajamaldeen627@gmail.com"
              href="mailto:musajamaldeen627@gmail.com"
              copyValue="musajamaldeen627@gmail.com"
            />
            <ContactBlock
              icon={Phone}
              label="Phone"
              value="+234 807 712 7417"
              href="tel:+2348077127417"
              copyValue="+2348077127417"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40"
        >
          <div>&copy; {currentYear} Musa Jamaldeen. Built for Speed.</div>

          <div className="flex items-center gap-6">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
              React
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
              Next.js
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
