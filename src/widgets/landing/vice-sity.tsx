import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const ViceSity = () => {
  useGSAP(() => {
    gsap.set(".vice-city", {
      opacity: 0,
      marginTop: "-150vh"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vice-city",
        start: "top top",
        end: "+=200% top",
        scrub: 2,
        pin: true
      }
    });

    tl.to(".hero-section", { opacity: 0, ease: "power1.inOut" })
      .to(".vice-city", {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power1.inOut"
      })
      .to(
        ".vice-city-content",
        {
          scale: 1,
          duration: 3,
          ease: "power1.inOut"
        },
        "<"
      );
  });

  return (
    <section className="vice-city w-full h-screen flex items-center justify-center">
      <div className="size-full vice-city-content scale-125 max-w-[90%] min-[769px]:max-w-5xl flex flex-col justify-center gap-6">
        <h2 className="text-3xl min-[769px]:text-7xl font-black bg-linear-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Vice City, USA.
        </h2>
        <p className="max-[769px]:px-2 text-xl min-[769px]:text-3xl font-semibold bg-linear-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Jason and Lucia have always known the deck is stacked against them.
          But when an easy score goes wrong, they find themselves on the darkest
          side of the sunniest place in America, in the middle of a criminal
          conspiracy stretching across the state of Leonida — forced to rely on
          each other more than ever if they want to make it out alive.
        </p>
      </div>
    </section>
  );
};
