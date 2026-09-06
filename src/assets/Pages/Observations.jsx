import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Observations = ({ nextPage }) => {
  const [openObservation, setOpenObservation] = useState(null);
  const container = useRef(null);

  const observations = [
    {
      id: 1,
      icon: "🔒",
      emoji: "❤️",
      text: "You remember the smallest things about me. Things I casually mention. Things I forget I ever said. But somehow... you remember.",
    },
    {
      id: 2,
      icon: "🔒",
      emoji: "❤️",
      text: `You always tell me... "You are my peace." But I don't think you realise something, Abbas. You are mine too.`,
    },
    {
      id: 3,
      icon: "🔒",
      emoji: "❤️",
      text: "You care about me in ways that don't always need big words. In the things you notice. In the things you remember. In the little ways you make sure I'm okay.",
    },
    {
      id: 4,
      icon: "🔒",
      emoji: "😅",
      text: "Your cute faces when you're trying to convince me about something? Highly effective. Unfortunately.",
    },
    {
      id: 5,
      icon: "🔒",
      emoji: "💀",
      text: "Your farting habit has been documented. Evidence has been collected. Further investigation pending. 😂",
    },
    {
      id: 6,
      icon: "🔒",
      emoji: "💗",
      text: "Of all the people in the world, you're the one I want to tell everything to. The first name that comes to mind. Every single time.",
    },
    {
      id: 7,
      icon: "🔒",
      emoji: "💗",
      text: "You make ordinary days feel like something worth keeping. I don't know how you do it. I'm just glad you do.",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".observation-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const handleObservation = (id) => {
    setOpenObservation((previous) => {
      return previous === id ? null : id;
    });
  };

  return (
    <section className="observations-page" ref={container}>
      <div className="observations-container">

        <p className="classified-title">
          CLASSIFIED — LEVEL 3
        </p>

        <h1>
          THINGS <span>ARWA NOTICES</span> ABOUT ABBAS
        </h1>

        <p className="click-instruction">
          Click each classified file to unlock it ↓
        </p>

        <div className="observations-list">
          {observations.map((observation) => {
            const isOpen = openObservation === observation.id;

            return (
              <div
                className={`observation-card ${
                  isOpen ? "open" : ""
                }`}
                key={observation.id}
              >
                {/* CLICKABLE HEADER */}
                <button
                  className="observation-header"
                  onClick={() =>
                    handleObservation(observation.id)
                  }
                >
                  <div className="observation-title">
                    <span>{observation.icon}</span>

                    <span>
                      OBSERVATION{" "}
                      {String(observation.id).padStart(2, "0")}
                    </span>

                    <span className="observation-emoji">
                      {observation.emoji}
                    </span>

                    <span className="data-saved">
                      — DATA SAVED
                    </span>
                  </div>

                  <span className="open-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* HIDDEN CONTENT */}
                <div className="observation-content">
                  <div className="observation-inner">
                    <p>{observation.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="continue-button observation-continue"
          onClick={nextPage}
        >
          UNLOCK PERSONAL FILES →
        </button>

        <p className="project-footer">
          PROJECT: ABBAS_26 — made with love by Arwa
        </p>

      </div>
    </section>
  );
};

export default Observations;