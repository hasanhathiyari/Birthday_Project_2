import { useEffect, useRef } from "react";
import gsap from "gsap";

const FunnyPoop = () => {
  const container = useRef(null);

  useEffect(() => {
    const poops =
      container.current.querySelectorAll(".poop");

    poops.forEach((poop, index) => {
      gsap.fromTo(
        poop,
        {
          y: 200,
          opacity: 0,
          scale: 0.5,
        },
        {
          y: -window.innerHeight - 300,
          x: gsap.utils.random(-300, 100),
          rotation: gsap.utils.random(-360, 360),
          opacity: 0.8,
          scale: gsap.utils.random(0.7, 1.2),
          duration: gsap.utils.random(5, 9),
          delay: index * 0.5,
          repeat: -1,
          ease: "none",
        }
      );
    });
  }, []);

  return (
    <div
      ref={container}
      className="poop-container"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          className="poop"
          key={index}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          💩
        </span>
      ))}
    </div>
  );
};

export default FunnyPoop;