import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Lucia = () => {
  useGSAP(() => {
    gsap.set(".lucia", { marginTop: "-100vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".lucia",
          start: "top 60%",
          end: "10% center",
          scrub: 2
        }
      })
      .to(".second-vd", {
        opacity: 0,
        ease: "power1.inOut"
      });

    gsap.to(".lucia .img-box", {
      scrollTrigger: {
        trigger: ".lucia",
        start: "top center",
        end: "80% center",
        scrub: 2
      },
      y: -300,
      ease: "power1.inOut"
    });
  });

  return (
    <section className="lucia relative z-10 2xl:pe-40 py-40 mt-60">
      <div className="flex max-[769px]:flex-col-reverse gap-3">
        <div className="flex flex-col items-end gap-3 max-lg:px-4 mt-96 img-box">
          <div className="group bg-yellow lg:h-screen w-auto lg:translate-x-5">
            <img
              className="size-full object-cover group-hover:scale-98 transition-transform duration-500"
              src="/images/lucia-1.webp"
              alt="lucia-1"
            />
          </div>
          <div className="group bg-yellow h-[50vh] lg:h-screen min-[769px]:w-[60%] lg:translate-x-5">
            <img
              className="size-full object-cover group-hover:scale-98 transition-transform duration-500"
              src="/images/lucia-3.webp"
              alt="lucia-3"
            />
          </div>
        </div>
        <div className="min-[769px]:max-w-2/5 flex flex-col gap-20">
          <h2 className="text-yellow font-long uppercase text-8xl ps-10">
            Lucia Caminos
          </h2>
          <div className="space-y-10 ps-10">
            <h3 className="text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10">
              Lucia’s father taught her to fight as soon as she could walk.
            </h3>
            <p className="text-white md:text-2xl text-lg md:pe-28 pe-14">
              Life has been coming at her swinging ever since. Fighting for her
              family landed her in the Leonida Penitentiary. Sheer luck got her
              out. Lucia’s learned her lesson — only smart moves from here.
            </p>
          </div>
          <div className="group mx-4 bg-yellow min-[769px]:h-[90vh] w-auto mt-10 lg:translate-x-5">
            <img
              className="size-full object-cover group-hover:scale-98 transition-transform duration-500"
              src="/images/lucia-2.webp"
              alt="lucia-2"
            />
          </div>
          <div className="ps-10">
            <p className="text-white md:text-2xl text-lg md:pe-28 pe-14">
              More than anything, Lucia wants the good life her mom has dreamed
              of since their days in Liberty City — but instead of half-baked
              fantasies, Lucia is prepared to take matters into her own hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
