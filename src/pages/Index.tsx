import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramSection from "@/components/ProgramSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SMKN Jawa Tengah Pati - Sang Juara | Boarding School Gratis</title>
        <meta
          name="description"
          content="SMKN Jawa Tengah Pati adalah sekolah menengah kejuruan unggulan dengan sistem boarding school dan semi militer. 100% gratis untuk siswa kurang mampu. Jurusan TPHP dan TPBO."
        />
        <meta
          name="keywords"
          content="SMKN Jawa Tengah Pati, SMK gratis, boarding school, semi militer, TPHP, TPBO, pendidikan vokasi, Sang Juara"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar isHeroPage={true} />
        <main>
          <HeroSection />
          <GalleryCarousel />
          <FeaturesSection />
          <ProgramSection />
          <StatsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
