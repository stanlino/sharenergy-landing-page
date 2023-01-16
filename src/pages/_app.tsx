import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { GlobalStyles } from "@/styles/globalStyles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
    </>
  );
}
