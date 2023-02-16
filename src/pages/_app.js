import "@/styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
