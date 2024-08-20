import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="px-6 md:px-16">{children}</div>;
}
