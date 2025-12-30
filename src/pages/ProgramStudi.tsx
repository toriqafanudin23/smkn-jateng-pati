import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Car, Clock, Users, Award, BookOpen, Briefcase, Target, ArrowRight } from "lucide-react";

import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const programs = [
  {
    id: "tphp",
    name: "Teknologi Pengelolaan Hasil Pertanian",
    shortName: "TPHP",
    description: "Program keahlian yang mempelajari pengolahan hasil pertanian, teknologi pangan, dan industri makanan. Siswa dibekali keterampilan untuk mengolah berbagai produk pertanian menjadi produk pangan berkualitas tinggi.",
    image: gallery2,
    icon: Leaf,
    duration: "3 Tahun",
    graduates: "500+",
    achievements: "25+",
    curriculum: [
      "Dasar-dasar Teknologi Pangan",
      "Pengolahan Hasil Nabati",
      "Pengolahan Hasil Hewani",
      "Pengemasan dan Penyimpanan Pangan",
      "Sanitasi dan Hygiene Industri",
      "Kewirausahaan Pangan",
      "Praktik Kerja Lapangan",
    ],
    careers: [
      "Supervisor Produksi Pangan",
      "Quality Control Industri Makanan",
      "Wirausaha Kuliner",
      "Teknisi Laboratorium Pangan",
      "Staff R&D Industri Makanan",
    ],
    facilities: [
      "Laboratorium Pengolahan Pangan",
      "Ruang Pengemasan Modern",
      "Dapur Industri",
      "Lab Uji Kualitas Pangan",
    ],
  },
  {
    id: "tpbo",
    name: "Teknik Perbaikan Bodi Otomotif",
    shortName: "TPBO",
    description: "Program keahlian yang fokus pada perbaikan bodi kendaraan, pengecatan otomotif, dan pengelasan. Siswa dilatih untuk menjadi teknisi profesional yang siap bekerja di industri otomotif.",
    image: gallery3,
    icon: Car,
    duration: "3 Tahun",
    graduates: "400+",
    achievements: "30+",
    curriculum: [
      "Dasar-dasar Teknik Otomotif",
      "Perbaikan Panel Bodi Kendaraan",
      "Teknik Pengecatan Otomotif",
      "Pengelasan dan Pemotongan",
      "Restorasi Kendaraan Klasik",
      "Finishing dan Poles",
      "Praktik Kerja Industri",
    ],
    careers: [
      "Teknisi Body Repair",
      "Spray Painter Otomotif",
      "Supervisor Bengkel",
      "Estimator Kerusakan",
      "Wirausaha Bengkel Otomotif",
    ],
    facilities: [
      "Bengkel Body Repair",
      "Spray Booth Modern",
      "Ruang Pengelasan",
      "Workshop Poles & Finishing",
    ],
  },
];

const ProgramStudi = () => {
  return (
    <>
      <Helmet>
        <title>Program Studi - SMKN Jawa Tengah Pati</title>
        <meta
          name="description"
          content="Program studi SMKN Jawa Tengah Pati: Teknologi Pengelolaan Hasil Pertanian (TPHP) dan Teknik Perbaikan Bodi Otomotif (TPBO)."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-4">
                Program Studi
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Pilih Masa Depanmu
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Dua program keahlian unggulan yang siap mengantarmu menuju karir cemerlang di industri
              </p>
            </div>
          </section>

          {/* Programs Detail */}
          {programs.map((program, index) => (
            <section
              key={program.id}
              id={program.id}
              className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
            >
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-accent text-accent-foreground font-bold rounded-lg shadow-gold">
                          {program.shortName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                        <program.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                        {program.name}
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-card rounded-xl border border-border">
                      <div className="text-center">
                        <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="font-bold text-foreground">{program.duration}</p>
                        <p className="text-xs text-muted-foreground">Durasi</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="font-bold text-foreground">{program.graduates}</p>
                        <p className="text-xs text-muted-foreground">Lulusan</p>
                      </div>
                      <div className="text-center">
                        <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="font-bold text-foreground">{program.achievements}</p>
                        <p className="text-xs text-muted-foreground">Prestasi</p>
                      </div>
                    </div>

                    {/* Curriculum */}
                    <div className="mb-8">
                      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground mb-4">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Kurikulum
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {program.curriculum.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Careers */}
                    <div className="mb-8">
                      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground mb-4">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Prospek Karir
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {program.careers.map((career, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Facilities */}
                    <div className="mb-8">
                      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground mb-4">
                        <Target className="w-5 h-5 text-primary" />
                        Fasilitas
                      </h3>
                      <ul className="space-y-2">
                        {program.facilities.map((facility, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="hero" size="lg" asChild>
                      <Link to="/ppdb">
                        Daftar Sekarang
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProgramStudi;
