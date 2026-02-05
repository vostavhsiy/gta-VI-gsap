import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Outro = () => {
  useGSAP(() => {
    gsap.set(".outro", { marginTop: "-130vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outro",
        start: "top top",
        end: "bottom 70%",
        scrub: 2,
        pin: true
      },
      onUpdate() {
        const progress = this?.progress?.() || 0;
        if (progress <= 0.1) {
          gsap.set("main", {
            "--r1": "rgb(110, 75, 145)",
            "--r2": "rgb(110, 75, 145)",
            "--r3": "rgb(110, 75, 145)",
            "--r4": "rgb(110, 75, 145)",
            "--r5": "rgb(110, 75, 145)",
            "--r6": "rgb(110, 75, 145)",
            "--r7": "rgb(110, 75, 145)"
          });
        } else {
          gsap.set("main", {
            "--r1": "rgb(28, 24, 41)",
            "--r2": "rgb(27, 24, 40)",
            "--r3": "rgb(25, 23, 36)",
            "--r4": "rgb(22, 21, 32)",
            "--r5": "rgb(20, 19, 28)",
            "--r6": "rgb(18, 18, 24)",
            "--r7": "rgb(17, 17, 23)"
          });
        }
      }
    });

    tl.to(".final-video-content", { opacity: 0, ease: "power1.inOut" })
      .to(".outro", {
        opacity: 1,
        visibility: "visible",
        ease: "power1.inOut"
      })
      .to(
        ".outro .entrance-info",
        {
          scale: 1,
          ease: "power1.inOut"
        },
        "<"
      );
  });

  return (
    <section className="outro relative invisible w-full h-screen flex flex-col items-center justify-center gap-5">
      <img
        src="/images/logo.webp"
        className="max-[769px]:w-[50dvw] w-[13dvw] z-5 absolute -top-1/20 left-1/2 -translate-x-1/2 translate-y-[90%] sm:translate-y-[45%] lg:translate-y-[90%]"
        alt="logo"
      />
      <div className="entrance-info scale-125 mt-16 md:mt-30 flex flex-col items-center justify-center gap-5">
        <p className="text-[3rem] md:text-[5rem] font-round-bold font-black uppercase leading-18 text-center bg-linear-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Coming <br /> November 19 <br /> 2026
        </p>
        <div className="flex items-center gap-10">
          <img src="/images/ps-logo.svg" alt="ps" />
          <img src="/images/x-logo.svg" alt="x" />
        </div>
      </div>
    </section>
  );
};
