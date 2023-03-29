import { useEffect } from 'react';
import '@/styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}
