import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">SMKN Jawa Tengah</h3>
                <p className="text-sm text-primary-foreground/70">Pati</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              "Tiada Hari Tanpa Prestasi" - Sekolah Menengah Kejuruan Unggulan dengan sistem Boarding School dan Semi Militer.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/program-studi" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Program Studi
                </Link>
              </li>
              <li>
                <Link to="/lab-bengkel" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Lab & Bengkel
                </Link>
              </li>
              <li>
                <Link to="/berita" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link to="/guru-staf" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Guru & Staf
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Program Studi</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/program-studi#tphp" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Teknologi Pengelolaan Hasil Pertanian
                </Link>
              </li>
              <li>
                <Link to="/program-studi#tpbo" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Teknik Perbaikan Bodi Otomotif
                </Link>
              </li>
              <li>
                <Link to="/ppdb" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Pendaftaran PPDB
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Galeri Sekolah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Jl. Pendidikan No. 1, Pati, Jawa Tengah 59115
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+6282112345678" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +62 821 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@smknjatengpati.sch.id" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  info@smknjatengpati.sch.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 SMKN Jawa Tengah Pati. Hak Cipta Dilindungi.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              <span className="text-accent font-semibold">Sang Juara</span> - Tiada Hari Tanpa Prestasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
