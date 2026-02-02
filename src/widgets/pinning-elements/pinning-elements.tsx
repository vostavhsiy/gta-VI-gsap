import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const PinningElements = () => {
  const pinned = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(pinned.current, {
      scrollTrigger: {
        trigger: pinned.current,
        start: "center center",
        end: "bottom+=400% center",
        pin: true
        // markers: true
      }
    })
      .to(box.current, {
        x: "200%",
        rotation: 360,
        borderRadius: "100%",
        duration: 3,
        scrollTrigger: {
          trigger: pinned.current,
          start: "top center",
          end: "bottom+=400% center",
          scrub: true
          // markers: true
        }
      })
      .to(text.current, {
        y: -400,
        backgroundColor: "#000",
        color: "#fff",
        duration: 3,
        scrollTrigger: {
          trigger: pinned.current,
          start: "top center",
          end: "bottom+=400% center",
          scrub: true
          // markers: true
        }
      });
  });

  return (
    <div>
      <section className="h-screen flex items-center justify-center text-2xl">
        Scroll down to see the animation
      </section>
      <section
        ref={pinned}
        className="flex flex-col items-center justify-center p-12 bg-black rounded-xl"
      >
        <div
          ref={box}
          className="size-37.5 bg-linear-to-r from-blue-500 to-sky-800 shadow-lg rounded-xl"
        />
        <div ref={text} className="py-2 px-4 rounded-full text-purple-300">
          Text to up
        </div>
      </section>
      <section className="h-screen flex items-center justify-center text-2xl">
        Box and text are moving while section is pinned
      </section>
    </div>
  );
};
