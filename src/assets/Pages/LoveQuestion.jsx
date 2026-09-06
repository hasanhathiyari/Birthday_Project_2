import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import BackgroundEffects from "../Components/BackgroundEffects";

const LoveQuestion = ({ nextPage }) => {
  const container = useRef(null);
  const noButton = useRef(null);

  const [message, setMessage] = useState("");

  useGSAP(
    () => {
      gsap.from(".love-content > *", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const escapeButton = () => {
    const messages = [
      "Nice try, Abbas 😏",
      "Wrong answer detected 💀",
      "Absolutely not 😂",
      "System refuses this option ❤️",
      "Choose wisely 👀",
      "The NO button has trust issues 😭",
    ];

    setMessage(
      messages[
        Math.floor(
          Math.random() * messages.length
        )
      ]
    );

    const x = gsap.utils.random(-180, 180);
    const y = gsap.utils.random(-150, 150);

    gsap.to(noButton.current, {
      x,
      y,
      rotation: gsap.utils.random(-12, 12),
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleYes = () => {
    gsap.to(".love-content", {
      opacity: 0,
      scale: 1.08,
      duration: 0.6,
      onComplete: nextPage,
    });
  };

  return (
    <section
      ref={container}
      className="mission-page love-page"
    >
      <BackgroundEffects />

      <div className="love-content">
        <p className="system-label">
          SYSTEM CHECK INITIATED
        </p>

        <h1>
          DO YOU LOVE ME,
          <span> ARWA? ❤️</span>
        </h1>

        <p className="love-subtitle">
          Please select the correct answer
          carefully.
        </p>

        <div className="love-buttons">
          <button
            className="yes-button"
            onClick={handleYes}
          >
            YES ❤️
          </button>

          <button
            ref={noButton}
            className="no-button"
            onMouseEnter={escapeButton}
            onClick={escapeButton}
          >
            NO 😐
          </button>
        </div>

        <p className="funny-message">
          {message}
        </p>
      </div>
    </section>
  );
};

export default LoveQuestion;