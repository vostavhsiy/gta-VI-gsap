import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ExampleContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col gap-5 items-center justify-center">
      {children}
    </div>
  );
};
