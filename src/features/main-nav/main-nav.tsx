import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useClickOutside } from "../../shared/hooks/use-outside-click";
import { Link, useLocation } from "@tanstack/react-router";
import { cn, isLinkActive } from "../../shared/utils";

const links = [
  { to: "/", label: "GTA VI" },
  { to: "/first-animation", label: "First Animation" },
  { to: "/sine-easing", label: "Sine Easing" },
  { to: "/back-easing", label: "Back Easing" },
  { to: "/scroll-trigger", label: "Scroll Trigger" },
  { to: "/pinning-elements", label: "Pinning Elements" }
];

export const MainNav = () => {
  const location = useLocation();

  const container = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { contextSafe } = useGSAP({ scope: container });

  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closePopover = contextSafe(() => {
    setTimeout(() => setIsOpen(false), 300);
    gsap.to(buttonRef.current, {
      rotate: 0,
      duration: 0.7,
      ease: "power2.inOut"
    });
    gsap
      .to(popoverRef.current, {
        opacity: 0,
        y: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power3.out"
      })
      .then(() => {
        gsap.set(popoverRef.current, { visibility: "hidden" });
      });
  });

  useClickOutside(container, closePopover);

  const onClick = contextSafe(() => {
    setTimeout(() => setIsOpen(true), 300);
    gsap.to(buttonRef.current, {
      rotate: 360,
      duration: 0.7,
      ease: "power2.inOut"
    });
    gsap.to(popoverRef.current, {
      visibility: "visible",
      opacity: 1,
      scale: 1,
      y: -10,
      duration: 0.7,
      ease: "power3.out"
    });
  });

  return (
    <div
      className="group fixed z-200 bottom-4 right-4"
      ref={container}
      onClick={onClick}
    >
      <button
        ref={buttonRef}
        onClick={(event) => {
          if (!isOpen) return;
          event.stopPropagation();
          closePopover();
        }}
        className="flex items-center justify-center size-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-[0px_0px_80px_0px_rgba(0,0,0,0.1)] shadow-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        {isOpen ? "✕" : "⚙"}
      </button>
      <div
        ref={popoverRef}
        className="overflow-hidden scale-95 p-2 flex gap-3 flex-col absolute bottom-full right-0 invisible opacity-0 w-max bg-black rounded-xl"
      >
        {links.map((link) => (
          <Link
            onClick={(event) => {
              event.stopPropagation();
              closePopover();
            }}
            key={link.to}
            to={link.to}
            className={cn(
              "rounded-xl py-2 px-4 transition-all text-neutral-400 hover:text-white hover:bg-neutral-900",
              isLinkActive(location.pathname, link.to) &&
                "bg-linear-to-br from-purple-500/70 to-pink-500/40 text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
