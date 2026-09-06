import { useEffect, useRef } from "react";
import gsap from "gsap";

const BackgroundEffects = () => {
  const container = useRef(null);

  useEffect(() => {
    const particles =
      container.current.querySelectorAll(".particle");

    particles.forEach((particle) => {
      gsap.to(particle, {
        x: gsap.utils.random(-150, 150),
        y: gsap.utils.random(-200, 200),
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(3, 8),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={container}
      className="background-effects"
    >
      {Array.from({ length: 30 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;