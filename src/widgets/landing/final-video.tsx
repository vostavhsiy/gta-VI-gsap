import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const FinalVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".final-video", { opacity: 0 });
    gsap.set(".final-video video", { scale: 1.1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".final-video",
        start: "top top",
        end: "80% top",
        scrub: 2,
        pin: true
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-video",
        start: "top 80%",
        end: "90% top",
        scrub: 2
      }
    });

    tl.to(".final-video", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut"
    }).to(
      ".final-video video",
      {
        scale: 1,
        duration: 2,
        ease: "power1.inOut"
      },
      "<"
    );

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(
          videoRef.current,
          {
            duration: 3,
            currentTime: videoRef.current?.duration || 0,
            ease: "power1.inOut"
          },
          "<"
        );
      };
    }
  });

  return (
    <section className="final-video w-full h-screen">
      <video
        ref={videoRef}
        className="size-full object-cover"
        muted
        playsInline
        preload="auto"
        src="/videos/output3.mp4"
      />
    </section>
  );
};
