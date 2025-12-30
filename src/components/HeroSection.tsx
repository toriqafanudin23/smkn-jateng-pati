import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SMKN Jawa Tengah Pati - Gedung Sekolah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full animate-float opacity-50" />
      <div className="absolute bottom-32 right-20 w-20 h-20 border-2 border-accent/30 rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/90 rounded-full mb-8 animate-fade-in shadow-gold">
            <Award className="w-5 h-5 text-accent-foreground" />
            <span className="text-sm font-bold text-accent-foreground uppercase tracking-wider">
              Sang Juara
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.2s" }}>
            SMKN Jawa Tengah
            <span className="block text-accent mt-2">Pati</span>
          </h1>

          {/* Jargon */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-serif italic mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            "Tiada Hari Tanpa Prestasi"
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Sekolah Menengah Kejuruan Unggulan dengan sistem{" "}
            <span className="font-semibold text-primary-foreground">Boarding School</span> &{" "}
            <span className="font-semibold text-primary-foreground">Semi Militer</span>.
            100% Gratis untuk siswa kurang mampu.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/90 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm sm:bg-transparent sm:p-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium">Boarding School</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm sm:bg-transparent sm:p-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium">Semi Militer</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm sm:bg-transparent sm:p-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium">100% Gratis</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <Button variant="gold" size="xl" asChild className="text-lg">
              <Link to="/ppdb">Daftar PPDB 2025</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="text-lg">
              <Link to="/program-studi">Lihat Program Studi</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
