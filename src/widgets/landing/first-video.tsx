import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const FirstVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", {
      opacity: 0,
      visibility: "hidden",
      marginTop: "-150vh"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: 2,
        pin: true,
      }
    });

    tl.to(".vice-city-content", {
      opacity: 0,
      duration: 0.2,
      ease: "power1.inOut"
    }).to(".first-vd-wrapper", {
      opacity: 1,
      visibility: "visible",
      duration: 3,
      ease: "power1.inOut"
    });

    if (videoRef.current)
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
  });

  return (
    <section className="first-vd-wrapper w-full h-screen">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output1.mp4"
        className="first-vd size-full object-cover max-lg:object-[75%_center]"
      />
    </section>
  );
};
