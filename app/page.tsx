import BackToTop from "@/components/BackToTop";
import BankBc from "@/components/BankBc";
import Ejaipur from "@/components/Ejaipur";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rkcl from "@/components/Rkcl";
import VerifyApply from "@/components/Verify";

export default function Home() {
  return (
    <>
    <BackToTop/>
    <Navbar/>
    <Hero/>
    <VerifyApply/>
    <Ejaipur/>
    <BankBc/>
    <Rkcl/>
    <Footer/>
    </>
  );
}
