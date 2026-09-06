import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import BackgroundEffects from "../Components/BackgroundEffects";

const PrivateTransmission = ({ nextPage }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from(".intro-item", {
        y: 35,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const handleEnter = () => {
    gsap.to(container.current, {
      opacity: 0,
      scale: 1.05,
      filter: "blur(15px)",
      duration: 0.6,
      onComplete: nextPage,
    });
  };

  return (
    <section
      ref={container}
      className="mission-page"
    >
      <BackgroundEffects />

      <div className="intro-card">
        <p className="intro-item private-title">
          🔒 PRIVATE TRANSMISSION
        </p>

        <h2 className="intro-item intro-message">
          This website was made by a wife, for her
          husband. ❤️
        </h2>

        <div className="intro-item subject-info">
          <p>
            NAME: <strong>ABBAS BABJI</strong>
          </p>

          <p>
            FROM:{" "}
            <strong>
              ARWA — your wife, always
            </strong>
          </p>

          <p>
            DATE OF BIRTH:{" "}
            <strong>07.09.2000</strong>
          </p>
        </div>

        <div className="intro-item warning-message">
          <p>
            Unauthorized people, please leave.
          </p>

          <p className="except">
            Except you.
          </p>

          <h1>
            YOU ARE EXPECTED HERE.
          </h1>
        </div>

        <button
          className="enter-button intro-item"
          onClick={handleEnter}
        >
          ENTER →
        </button>
      </div>
    </section>
  );
};

export default PrivateTransmission;