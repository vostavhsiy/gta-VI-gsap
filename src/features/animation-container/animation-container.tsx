import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AnimationContainer: FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex rounded-xl items-center justify-center max-w-2xl py-12 bg-neutral-900 border border-purple-500/60">
      {children}
    </div>
  );
};
