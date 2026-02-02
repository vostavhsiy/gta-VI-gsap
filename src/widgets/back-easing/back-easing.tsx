import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const BackEasing = () => {
  const container = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    const buttons = container.current?.querySelectorAll("button");
    const updateIndicator = contextSafe((event: MouseEvent) => {
      buttons?.forEach((btn) => {
        btn.classList.remove("text-white");
      });
      const target = event.target as HTMLElement;
      target?.classList.add("text-white");
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.current!.getBoundingClientRect();
      const indicatorWidth = targetRect.width;
      const indicatorLeft = targetRect.left - containerRect.left;
      console.log({ indicatorWidth, indicatorLeft });
      gsap.to(indicator.current, {
        width: indicatorWidth,
        x: indicatorLeft,
        ease: "back.out(1.7)",
        duration: 0.3
      });
    });

    buttons?.forEach((button) => {
      button.addEventListener("click", updateIndicator);
    });

    buttons?.[0]?.click();

    return () => {
      buttons?.forEach((button) => {
        button.removeEventListener("click", updateIndicator);
      });
    };
  }, []);

  return (
    <div>
      <div
        ref={container}
        className="flex items-center gap-3 p-2 bg-black rounded-xl text-neutral-400 relative"
      >
        <div
          ref={indicator}
          className="absolute h-0.5 rounded-full left-0 bottom-0 bg-linear-to-r from-blue-600 to-blue-800"
        />
        <button className="px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white rounded-xl">
          Home
        </button>
        <button className="px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white rounded-xl">
          About
        </button>
        <button className="px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white rounded-xl">
          Contacts
        </button>
        <button className="px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white rounded-xl">
          Blog
        </button>
        <button className="px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white rounded-xl">
          Services
        </button>
      </div>
    </div>
  );
};
