import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useClickOutside } from "../../shared/hooks/use-outside-click";
import { Link, useLocation } from "@tanstack/react-router";
import { cn, isLinkActive } from "../../shared/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/first-animation", label: "First Animation" },
];

export const MainNav = () => {
  const location = useLocation();

  const container = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { contextSafe } = useGSAP({ scope: container });

  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closePopover = contextSafe(() => {
    gsap.to(buttonRef.current, {
      rotate: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap
      .to(popoverRef.current, {
        opacity: 0,
        y: 0,
        duration: 0.3,
      })
      .then(() => {
        gsap.set(popoverRef.current, { visibility: "hidden" });
        setIsOpen(false);
      });
  });

  useClickOutside(container, closePopover);

  const onClick = contextSafe(() => {
    gsap.to(buttonRef.current, {
      rotate: 360,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap
      .to(popoverRef.current, {
        visibility: "visible",
        opacity: 1,
        y: 10,
        duration: 0.3,
      })
      .then(() => {
        setIsOpen(true);
      });
  });

  return (
    <div
      className="group fixed top-4 right-4"
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
        className="flex items-center justify-center size-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600"
      >
        {isOpen ? "X" : "☰"}
      </button>
      <div
        ref={popoverRef}
        className="overflow-hidden flex flex-col absolute top-full right-0 invisible opacity-0 w-60 bg-stone-800 border border-black rounded-sm text-black"
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
              "py-2 px-4 transition-all text-purple-200 hover:bg-stone-700",
              isLinkActive(location.pathname, link.to) &&
                "bg-linear-to-br from-purple-500 to-pink-500/60 text-white",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
