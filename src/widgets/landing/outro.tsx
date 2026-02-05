import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
      }
    });

    tl.to("main", {
      background: "black"
    })
      .to(".final-video video", { opacity: 0, ease: "power1.inOut" })
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

    ScrollTrigger.refresh();
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
