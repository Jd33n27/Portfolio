import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

// Hook for Typewriter Effect
const useTypewriter = (
  words: string[],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayedText((current) =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      // Speed up when deleting
      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

      // Logic: If word is fully typed
      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration); // Pause at end of word
      }
      // Logic: If word is fully deleted
      else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    loopNum,
    typingDelay,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayedText;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const animatedText = useTypewriter(
    ["extraordinary.", "impactful.", "scalable.", "intuitive.", "memorable."],
    100, // Typing speed
    50, // Deleting speed
    2000 // Pause before deleting
  );

  return (
    <footer className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* Top Section: CTA and Contact Info */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-5 h-24 md:h-auto">
              Let's build something <br />
              <span className="text-white/40">
                {animatedText}
                <span className="animate-pulse text-chelsea">|</span>
              </span>
            </h2>
            <p className="text-white/60 mx-auto text-lg md:max-w-xl mb-12 text-wrap text-center">
              I'm always excited to collaborate on innovative and exciting
              projects!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto mb-10">
              {/* Email Block */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-7 h-7 text-white" />
                  <h3 className="font-bold text-2xl text-white">Email</h3>
                </div>
                <p className="text-gray-200 text-lg hover:text-white transition-colors duration-300">
                  musajamaldeen627@gmail.com
                </p>
              </div>

              {/* Phone Block */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-7 h-7 text-white" />
                  <h3 className="font-bold text-2xl text-white">Phone</h3>
                </div>
                <p className="text-gray-200 text-lg hover:text-white transition-colors duration-300">
                  +234 807 712 7000
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40"
        >
          <div>&copy; {currentYear} Musa Jamaldeen. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              ReactJs
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              NextJs
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
