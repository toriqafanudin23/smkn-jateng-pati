import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Tag, ArrowRight, Megaphone, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-school.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const news = [
  {
    id: 1,
    title: "PPDB 2025 Resmi Dibuka!",
    excerpt: "Pendaftaran Peserta Didik Baru tahun ajaran 2025/2026 sudah resmi dibuka. Segera daftarkan diri Anda untuk mendapatkan pendidikan gratis berkualitas.",
    image: heroImage,
    date: "25 Desember 2024",
    category: "Pengumuman",
    featured: true,
  },
  {
    id: 2,
    title: "Siswa TPHP Raih Juara 1 LKS Tingkat Provinsi",
    excerpt: "Prestasi membanggakan diraih siswa program TPHP dalam Lomba Kompetensi Siswa tingkat Provinsi Jawa Tengah.",
    image: gallery2,
    date: "20 Desember 2024",
    category: "Prestasi",
    featured: true,
  },
  {
    id: 3,
    title: "Kunjungan Industri ke PT. Indofood",
    excerpt: "Siswa kelas XI TPHP melaksanakan kunjungan industri ke pabrik PT. Indofood untuk mengenal proses produksi makanan skala besar.",
    image: gallery2,
    date: "15 Desember 2024",
    category: "Kegiatan",
    featured: false,
  },
  {
    id: 4,
    title: "Upacara Hari Pahlawan 2024",
    excerpt: "Seluruh warga sekolah melaksanakan upacara peringatan Hari Pahlawan Nasional dengan penuh khidmat.",
    image: gallery1,
    date: "10 November 2024",
    category: "Kegiatan",
    featured: false,
  },
  {
    id: 5,
    title: "Workshop Teknik Pengecatan Modern",
    excerpt: "Program TPBO mengadakan workshop teknik pengecatan modern dengan mendatangkan praktisi dari industri otomotif.",
    image: gallery1,
    date: "5 November 2024",
    category: "Workshop",
    featured: false,
  },
  {
    id: 6,
    title: "Pengumuman Libur Akhir Semester",
    excerpt: "Informasi jadwal libur akhir semester ganjil tahun ajaran 2024/2025 dan kegiatan selama liburan.",
    image: heroImage,
    date: "1 November 2024",
    category: "Pengumuman",
    featured: false,
  },
];

const announcements = [
  {
    id: 1,
    title: "Jadwal Ujian Akhir Semester",
    date: "2 Januari 2025",
    type: "urgent",
  },
  {
    id: 2,
    title: "Pendaftaran Ekstrakurikuler Semester Genap",
    date: "5 Januari 2025",
    type: "info",
  },
  {
    id: 3,
    title: "Rapat Wali Murid Kelas XII",
    date: "10 Januari 2025",
    type: "info",
  },
];

const Berita = () => {
  const featuredNews = news.filter((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  return (
    <>
      <Helmet>
        <title>Berita & Pengumuman - SMKN Jawa Tengah Pati</title>
        <meta
          name="description"
          content="Berita terbaru, pengumuman, dan informasi kegiatan SMKN Jawa Tengah Pati."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-4">
                Informasi
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Berita & Pengumuman
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Ikuti perkembangan terbaru dari SMKN Jawa Tengah Pati
              </p>
            </div>
          </section>

          {/* Featured News */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                <Megaphone className="inline w-6 h-6 text-primary mr-2" />
                Berita Utama
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredNews.map((item, index) => (
                  <div
                    key={item.id}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Announcements & Other News */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Other News */}
                <div className="lg:col-span-2">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Berita Lainnya
                  </h2>
                  <div className="space-y-6">
                    {otherNews.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 bg-card p-4 rounded-xl shadow-sm hover:shadow-card transition-all duration-300 border border-border"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <span className="text-xs text-primary font-semibold">
                            {item.category}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                            {item.excerpt}
                          </p>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Announcements Sidebar */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                    <Bell className="inline w-6 h-6 text-primary mr-2" />
                    Pengumuman
                  </h2>
                  <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                    {announcements.map((item, index) => (
                      <div
                        key={item.id}
                        className={`p-4 hover:bg-secondary/50 transition-colors cursor-pointer ${
                          index !== announcements.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            item.type === "urgent" ? "bg-primary" : "bg-accent"
                          }`} />
                          <div>
                            <h4 className="font-medium text-foreground text-sm mb-1">
                              {item.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 p-6 bg-gradient-hero rounded-xl text-center">
                    <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">
                      Tertarik Bergabung?
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Daftar sekarang dan raih masa depan cerah bersama kami!
                    </p>
                    <Button variant="gold" asChild>
                      <Link to="/ppdb">Daftar PPDB</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Berita;
