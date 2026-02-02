import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../shared/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const SineEasing = () => {
  const container = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const [isScroll, setIsScroll] = useState(false);

  const { contextSafe } = useGSAP();

  const handleScroll = useCallback(
    contextSafe(() => {
      if (container.current?.scrollTop! > 20) {
        gsap.to(button.current!, { opacity: 1, visibility: "visible" });
        if (!isScroll) {
          gsap.to(button.current, {
            y: -10,
            duration: 1,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
          });
          setIsScroll(true);
        }
      } else {
        gsap.to(button.current!, { opacity: 0, visibility: "hidden" });
      }
    }),
    [isScroll]
  );

  useEffect(() => {
    container.current?.removeEventListener("scroll", handleScroll);

    container.current?.addEventListener("scroll", handleScroll);

    return () => {
      container.current?.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="relative">
      <button
        ref={button}
        onClick={() => {
          container.current?.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={cn(
          "transition-all invisible opacity-0 absolute right-6 bottom-0 size-8 bg-purple-600 rounded-full"
        )}
      >
        ↑
      </button>
      <p ref={container} className="max-h-100 overflow-auto px-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        repellat eaque. Corporis quaerat recusandae laborum, veritatis rerum,
        perspiciatis reprehenderit, distinctio nihil repellendus magni nemo
        facere ut quia dolores repudiandae voluptas. Dicta odit nostrum
        laudantium eius cumque culpa totam accusantium? Magni recusandae
        corporis aperiam ea commodi alias! Doloribus eos voluptate, qui est
        tempore nam. Quia tenetur quas aperiam labore exercitationem enim.
        Dolorum ullam ad dignissimos. Consequatur nisi porro quibusdam
        temporibus libero asperiores, ipsam iusto a soluta illum. Tenetur autem
        voluptatibus est rerum! Excepturi, hic est rerum autem quas totam sunt.
        Suscipit. Optio soluta ipsam pariatur ullam tempore quod incidunt facere
        eos reprehenderit omnis. Modi veritatis repudiandae nisi sit iure dolore
        magnam harum ipsa tenetur vitae optio, repellendus voluptas, numquam,
        amet architecto. Vel, tempora corrupti! Nobis aut praesentium quam
        numquam. Consequatur iure debitis deleniti voluptate dolore sequi
        suscipit eum. Rerum, veniam est error, deserunt minus doloribus in vel,
        numquam maxime eaque dolore! Qui ea ipsa deleniti quis amet quisquam
        natus corrupti autem, aliquam accusamus atque vel voluptatum enim ab
        dolores aspernatur nisi error mollitia cupiditate incidunt perferendis.
        Aspernatur veritatis qui optio quasi. Molestias ex laboriosam dolorum
        assumenda cum id magnam at deleniti exercitationem, officiis, neque eius
        alias necessitatibus atque debitis minima sunt, repudiandae porro sit
        aut fugiat? Hic ex neque unde incidunt. Omnis eligendi nobis soluta
        explicabo cupiditate expedita itaque! Odio nesciunt non ut officia eos
        dicta expedita aspernatur debitis! Quis placeat beatae itaque maxime in,
        atque libero magnam quod iusto similique! Eligendi quo tempora deleniti
        eos, voluptatem fugiat veniam provident culpa ab sunt pariatur voluptate
        a alias, temporibus dicta quam quos vitae nobis vel! Illo accusamus
        dolore necessitatibus molestias ex dolorem. Explicabo aut reiciendis
        officia hic nihil quo deleniti nulla at dolores accusantium natus earum
        sunt magni, reprehenderit doloribus, ratione ex perferendis tempore
        necessitatibus voluptas delectus! Rem doloremque suscipit reprehenderit
        mollitia!
      </p>
    </div>
  );
};
