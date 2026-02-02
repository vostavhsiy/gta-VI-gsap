import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ScrollTrigger = () => {
  const box = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(box.current, {
      x: 500,
      rotate: 360,
      duration: 3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: box.current,
        start: "top-=100 center",
        end: "bottom center",
        scrub: 1.5
        // markers: true
      }
    });
  });

  return (
    <div>
      <section className="h-screen flex items-center justify-center text-2xl">
        Scroll down to see the animation
      </section>
      <div
        ref={box}
        className="size-37.5 bg-linear-to-r from-blue-500 to-sky-800 shadow-lg rounded-xl"
      />
      <section className="h-screen flex items-center justify-center text-2xl">
        Box moves when start hits the starter-marker
      </section>
    </div>
  );
};
