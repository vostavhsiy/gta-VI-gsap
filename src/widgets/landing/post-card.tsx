import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const PostCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card",
        start: "top center",
        end: "60% center",
        scrub: true
      }
    });
    tl.to("main", {
      background: "linear-gradient(135deg, #1e2a52, #6e4b91)",
      ease: "power1.inOut"
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current?.duration || 0,
            ease: "power1.inOut"
          }
          // "<50%"
        );
      };
    }
  });

  return (
    <section className="post-card pt-[40vh] -mt-[70vh] lg:pt-[70vh] pb-[30vh]">
      <div className="group relative post-card max-sm:max-w-4/5 max-w-3/5 mx-auto shadow-lg hover:shadow-3xl hover:rotate-1 hover:scale-105 transition-all duration-500">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 size-full object-cover"
          playsInline
          muted
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />
        <img
          src="/images/overlay.webp"
          className="relative w-full aspect-273/182"
          alt="Post Card"
        />{" "}
        <button className="absolute left-1/2 -translate-x-1/2 bottom-[10%] py-2 px-4 rounded-full bg-white text-black group-hover:bg-yellow max-lg:text-sm w-max">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};
