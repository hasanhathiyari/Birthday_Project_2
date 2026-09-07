import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import BackgroundEffects from "../Components/BackgroundEffects";
import FunnyPoop from "../Components/FunnyPoop";

const Initializing = ({ nextPage }) => {
  const container = useRef(null);

  const [progress, setProgress] = useState(0);
  const [fartDetected, setFartDetected] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Searching for the birthday boy..."
  );

  useGSAP(
    () => {
      const progressObject = {
        value: 0,
      };

      const messages = [
        "Searching for the birthday boy...",
        "Scanning memories...",
        "Detecting suspicious photo faces...",
        "Searching for the world's most caring husband...",
      ];

      const animation = gsap.to(progressObject, {
        value: 100,
        duration: 4,
        ease: "power2.inOut",

        onUpdate: () => {
          const currentProgress = Math.round(
            progressObject.value
          );

          setProgress(currentProgress);

          if (currentProgress < 25) {
            setLoadingMessage(messages[0]);
          } else if (currentProgress < 50) {
            setLoadingMessage(messages[1]);
          } else if (currentProgress < 80) {
            setLoadingMessage(messages[2]);
          } else {
            setLoadingMessage(messages[3]);
          }
        },

        onComplete: () => {
          setProgress(100);
          setLoadingMessage(
            "⚠️ FART ACTIVITY DETECTED 💀"
          );
          setFartDetected(true);
        },
      });

      return () => {
        animation.kill();
      };
    },
    {
      scope: container,
    }
  );

  return (
    <section
      ref={container}
      className="mission-page initializing-page"
    >
      <BackgroundEffects />

      {fartDetected && <FunnyPoop />}

      <div className="initializing-content">
        <p className="system-label">
          INITIALIZING PROJECT: ABBAS_26
        </p>

        <h1>SUBJECT FOUND ❤️</h1>

        <p className="birthday-text">
          Happy 26th Birthday, Abbas
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="percentage">
          {progress}%
        </p>

        <p
          className={
            fartDetected
              ? "loading-text fart-alert"
              : "loading-text"
          }
        >
          {loadingMessage}
        </p>

        {fartDetected && (
          <button
            className="mission-button"
            onClick={nextPage}
          >
            START THE MISSION →
          </button>
        )}
      </div>
    </section>
  );
};

export default Initializing;