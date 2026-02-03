import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMaskSettings } from "../../shared/hooks/use-mask-settings";

export const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=200%",
        scrub: 2,
        pin: true
      }
    });

    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize
    });

    tl.to(".scale-out", {
      scale: 1,
      ease: "power1.inOut"
    })
      .to(
        ".fade-out",
        {
          opacity: 0,
          ease: "power1.inOut"
        },
        "<"
      )
      .to(
        ".mask-wrapper",
        {
          maskSize: maskSize,
          maskPosition: maskPos,
          ease: "power1.inOut"
        },
        "<"
      )
      .to(
        ".hero-bg",
        {
          opacity: 0,
          ease: "power1.inOut"
        },
        "<40%"
      )
      .to(
        ".entrance-message",
        {
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
          visibility: "visible",
          duration: 0.6,
          ease: "power1.inOut"
        },
        "<10%"
      )
      .to(
        ".entrance-info",
        {
          scale: 1,
          ease: "power1.inOut"
        },
        "<"
      );
  });

  return (
    <div>
      <nav className="flex items-center justify-between fixed z-100 top-0 left-0 w-full md:py-12 md:px-16 p-5">
        <img
          className="size-8 md:size-[2.5dvw]"
          src="/images/nav-logo.svg"
          alt="Logo"
        />
        <img
          className="size-8 md:size-[2.5dvw]"
          src="/images/menu.svg"
          alt="Menu"
        />
      </nav>
      <section className="hero-section relative overflow-hidden w-dvw h-dvh">
        <div className="size-full bg-white mask-wrapper">
          <img
            src="/images/hero-bg.webp"
            className="hero-bg scale-out size-full object-cover scale-125 object-[center_15%]"
            alt="hero-bg"
          />
          <img
            src="/images/hero-text.webp"
            className="scale-out fade-out absolute top-0 scale-125 size-full object-cover object-[center_15%]"
            alt="hero-text"
          />
          <button className="fade-out size-17.5 md:size-[7dvw] flex items-center justify-center rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 hover:scale-105 transition-transform duration-300">
            <img
              className="opacity-60 size-1/4 translate-x-1/12"
              src="/images/play.png"
              alt="play"
            />
          </button>
          <img
            src="/images/watch-trailer.png"
            className="scale-out fade-out absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] w-50 md:w-[13dvw]"
            alt="watch-trailer"
          />
        </div>
        <div className="entrance-message invisible absolute w-full top-0 left-0 translate-y-[29%] flex flex-col items-center justify-center gap-5">
          <img
            src="/images/logo.webp"
            className="max-[769px]:w-[50dvw] w-[13dvw]"
            alt="logo"
          />
          <div className="entrance-info scale-125 flex flex-col items-center justify-center gap-5">
            <p className="text-[3rem] md:text-[5rem] font-round-bold font-black uppercase leading-18 text-center bg-linear-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Coming <br /> November 19 <br /> 2026
            </p>
            <div className="flex items-center gap-10">
              <img src="/images/ps-logo.svg" alt="ps" />
              <img src="/images/x-logo.svg" alt="x" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
