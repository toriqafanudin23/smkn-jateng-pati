import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import schoolLogo from "@/assets/school-logo.png";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Program Studi", path: "/program-studi" },
  { name: "Lab & Bengkel", path: "/lab-bengkel" },
  { name: "Berita", path: "/berita" },
  { name: "Guru & Staf", path: "/guru-staf" },
  { name: "PPDB", path: "/ppdb" },
  { name: "Galeri", path: "/galeri" },
];

interface NavbarProps {
  isHeroPage?: boolean;
}

const Navbar = ({ isHeroPage = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHeroPage && !isScrolled;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isTransparent
        ? "bg-transparent border-transparent"
        : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={schoolLogo}
              alt="Logo SMKN Jawa Tengah Pati"
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className={cn(
                "font-serif text-lg font-bold leading-tight transition-colors duration-300",
                isTransparent ? "text-white" : "text-foreground"
              )}>
                SMKN Jawa Tengah
              </h1>
              <p className={cn(
                "text-xs font-medium transition-colors duration-300",
                isTransparent ? "text-white/80" : "text-muted-foreground"
              )}>Pati</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isTransparent
                    ? location.pathname === item.path
                      ? "text-white bg-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                    : location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant={isTransparent ? "gold" : "hero"} size="lg" asChild>
              <Link to="/ppdb">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isTransparent ? "hover:bg-white/10" : "hover:bg-secondary"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("w-6 h-6", isTransparent ? "text-white" : "text-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isTransparent ? "text-white" : "text-foreground")} />
            )}
          </button>
        </div>
      </div >

      {/* Mobile Navigation */}
      < div
        className={
          cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )
        }
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/ppdb" onClick={() => setIsOpen(false)}>
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
