import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const FirstAnimation = () => {
  const cube = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cube.current) return;
    gsap.to(cube.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      onComplete: () => {
        gsap.to(cube.current, {
          y: -20,
          duration: 0.3,
          repeat: -1,
          yoyo: true,
        });
      },
    });
  });

  return (
    <div
      ref={cube}
      className="size-50 opacity-0 scale-80 rounded-xl bg-linear-to-r from-purple-500 to-pink-500"
    />
  );
};
