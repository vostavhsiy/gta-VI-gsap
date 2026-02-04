import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const SecondVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".second-vd-wrapper", { opacity: 0, marginTop: "-60vh" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-vd-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      }
    });

    tl.to(".second-vd-wrapper", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current?.duration || 0,
            ease: "power1.inOut",
            duration: 3
          },
          "<"
        );
      };
    }
  });

  return (
    <section className="second-vd-wrapper w-full h-screen">
      <div className="second-vd size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};
