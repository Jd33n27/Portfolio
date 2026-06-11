import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const fullText = words[wordIndex % words.length];

    if (!isDeleting && displayedText === fullText) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayedText === "") {
      const advanceTimer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((index) => index + 1);
      }, deletingSpeed);
      return () => clearTimeout(advanceTimer);
    }

    const timer = setTimeout(() => {
      setDisplayedText((current) =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1),
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayedText;
}
