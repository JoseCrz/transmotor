import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="container mx-auto px-6">{children}</div>;
}
