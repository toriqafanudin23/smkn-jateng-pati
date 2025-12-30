import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          {/* CTA Card */}
          <div className="relative bg-gradient-hero rounded-3xl overflow-hidden shadow-lg">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Content */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-6">
                    <Calendar className="w-4 h-4" />
                    PPDB 2025 Dibuka!
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                    Wujudkan Mimpimu Bersama Kami
                  </h2>
                  <p className="text-primary-foreground/80 mb-8 text-lg">
                    Pendaftaran Peserta Didik Baru sudah dibuka. Raih kesempatan pendidikan gratis berkualitas tinggi!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="gold" size="xl" asChild>
                      <Link to="/ppdb">Daftar Sekarang</Link>
                    </Button>
                    <Button variant="heroOutline" size="xl" asChild>
                      <Link to="/berita">Info Selengkapnya</Link>
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="lg:pl-10 lg:border-l lg:border-primary-foreground/20">
                  <h3 className="font-serif text-xl font-bold text-primary-foreground mb-6">
                    Hubungi Kami
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+6282112345678"
                      className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/60">Telepon</p>
                        <p className="font-medium">+62 821 1234 5678</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@smknjatengpati.sch.id"
                      className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/60">Email</p>
                        <p className="font-medium">info@smknjatengpati.sch.id</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 text-primary-foreground/80">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/60">Alamat</p>
                        <p className="font-medium">Jl. Pendidikan No. 1, Pati, Jawa Tengah</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
