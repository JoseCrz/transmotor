import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { manrope } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${manrope.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
