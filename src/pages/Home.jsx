import HeroSection from "../components/bio/HeroSection";
import BioLinks from "../components/bio/BioLinks";
import FooterNav from "../components/bio/FooterNav";
import DecorativePattern from "../components/bio/DecorativePattern";
import CookieConsent from "../components/bio/CookieConsent";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center">
      <DecorativePattern />
      <CookieConsent />
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col">
        <HeroSection />
        <BioLinks />
        <FooterNav />
      </div>
    </div>
  );
}