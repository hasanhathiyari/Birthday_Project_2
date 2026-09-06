import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        scale: 0.97,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
      }
    );
  });

  return (
    <div ref={container} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;