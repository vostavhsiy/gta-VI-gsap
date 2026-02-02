import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function isLinkActive(currentPath: string, linkPath: string): boolean {
  if (linkPath === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(linkPath);
}
