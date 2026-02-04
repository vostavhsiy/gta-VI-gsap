import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-100vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 60%",
          end: "10% center",
          scrub: 2,
        }
      })
      .to(".first-vd", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
      });

    gsap.to(".jason .img-box", {
      scrollTrigger: {
        trigger: ".jason",
        start: "top center",
        end: "80% center",
        scrub: 2
      },
      y: -300,
      ease: "power1.inOut"
    });
  });

  return (
    <section className="jason z-10 lg:ps-40 2xl:ps-80 ps-10 py-40 mt-60">
      <div className="flex max-[769px]:flex-col gap-3 ">
        <div className="min-[769px]:max-w-2/5 flex flex-col gap-20">
          <h2 className="text-yellow font-long uppercase text-8xl">
            Jason Duval
          </h2>
          <div className="space-y-10">
            <h3 className="text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10">
              Jason wants an easy life, but things just keep getting harder.
            </h3>
            <p className="text-white md:text-2xl text-lg md:pe-28 pe-14">
              Jason grew up around grifters and crooks. After a stint in the
              Army trying to shake off his troubled teens, he found himself in
              the Keys doing what he knows best, working for local drug runners.
              It might be time to try something new.
            </p>
          </div>
          <div className="relative z-10 group bg-yellow h-[50vh] min-[769px]:h-[90vh] w-auto mt-10 -translate-x-5">
            <img
              className="size-full object-cover group-hover:scale-98 transition-transform duration-500"
              src="/images/jason-2.webp"
              alt="jason-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-96 img-box">
          <div className="group bg-yellow lg:h-[80vh] w-auto -translate-x-5">
            <img
              className="size-full object-cover group-hover:scale-98 transition-transform duration-500"
              src="/images/jason-1.webp"
              alt="jason-1"
            />
          </div>
          <div className="group bg-yellow h-[50vh] min-[769px]:w-[60%] -translate-x-5">
            <img
              className="size-full object-cover group-hover:scale-98 transition-transform duration-500"
              src="/images/jason-3.webp"
              alt="jason-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
