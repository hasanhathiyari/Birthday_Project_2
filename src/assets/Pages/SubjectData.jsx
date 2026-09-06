import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import BackgroundEffects from "../Components/BackgroundEffects";

const SubjectData = ({ nextPage }) => {
  const container = useRef(null);

  const data = [
    ["AGE", "26"],
    ["STATUS", "MY HUSBAND ❤️"],
    ["FROM", "ARWA — your wife, always"],
    ["FAVOURITE COLOUR", "RED"],
    [
      "SPECIAL ABILITY",
      "REMEMBERING EVERYTHING I LOVE",
    ],
    [
      "SECRET WEAPON",
      "CUTE FACES WHEN HE WANTS SOMETHING",
    ],
    [
      "PHOTO SKILL",
      "RUINING PERFECT POSES 😂",
    ],
    [
      "DANGER LEVEL",
      "💀💨 EXTREMELY HIGH",
    ],
  ];

  useGSAP(
    () => {
      gsap.from(".data-row", {
        opacity: 0,
        x: -50,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="mission-page subject-page"
    >
      <BackgroundEffects />

      <div className="subject-content">
        <p className="system-label">
          CONFIDENTIAL FILE: ABBAS BABJI
        </p>

        <h1 className="page-heading">
          SUBJECT DATA
        </h1>

        <div className="subject-table">
          {data.map(([label, value]) => (
            <div
              className="data-row"
              key={label}
            >
              <div className="data-label">
                {label}
              </div>

              <div className="data-value">
                {value}
              </div>
            </div>
          ))}
        </div>

        <button
          className="mission-button"
          onClick={nextPage}
        >
          UNLOCK PERSONAL FILES →
        </button>
      </div>
    </section>
  );
};

export default SubjectData;