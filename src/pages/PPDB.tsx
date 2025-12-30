import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PPDBRegistrationForm from "@/components/PPDBRegistrationForm";
import {
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Users,
  GraduationCap,
  Phone,
  Mail,
  ArrowRight,
  Download
} from "lucide-react";

const timeline = [
  {
    step: 1,
    title: "Verifikasi Administrasi",
    date: "s/d 31 Januari 2025",
    description: "Verifikasi kelengkapan dan keabsahan berkas pendaftaran.",
    status: "active",
  },
  {
    step: 2,
    title: "Tes Tertulis",
    date: "15 Februari 2025",
    description: "Ujian tertulis meliputi Matematika, IPA, dan Bahasa Inggris.",
    status: "upcoming",
  },
  {
    step: 3,
    title: "Tes Fisik",
    date: "3 Maret 2025",
    description: "Tes kebugaran jasmani: lari, push up, sit up, dan lainnya.",
    status: "upcoming",
  },
  {
    step: 4,
    title: "Tes Kesehatan",
    date: "3 Maret 2025",
    description: "Pemeriksaan kesehatan: mata, urin, tinggi/berat badan, dan lainnya.",
    status: "upcoming",
  },
  {
    step: 5,
    title: "Survey Rumah",
    date: "20 - 30 Maret 2025",
    description: "Survey kondisi tempat tinggal dan keluarga calon siswa.",
    status: "upcoming",
  },
  {
    step: 6,
    title: "Pengumuman Lolos",
    date: "7 April 2025",
    description: "Pengumuman hasil seleksi akhir melalui website dan SMS.",
    status: "upcoming",
  },
];

const requirements = [
  "Lulusan SMP/MTs atau sederajat",
  "Usia maksimal 18 tahun pada 1 Juli 2025",
  "Sehat jasmani dan rohani",
  "Berasal dari keluarga kurang mampu (dibuktikan dengan SKTM)",
  "Tidak bertato dan tidak bertindik (khusus laki-laki)",
  "Bersedia tinggal di asrama selama masa pendidikan",
  "Bersedia mengikuti sistem pendidikan semi militer",
];

const documents = [
  "Fotokopi Ijazah/SKL SMP/MTs (legalisir)",
  "Fotokopi SKHUN (legalisir)",
  "Fotokopi Rapor semester 1-5",
  "Fotokopi Kartu Keluarga",
  "Fotokopi KTP Orang Tua/Wali",
  "Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan/Desa",
  "Pas foto 3x4 (4 lembar) background merah",
  "Surat keterangan sehat dari dokter",
  "Surat keterangan berkelakuan baik dari sekolah asal",
];

const PPDB = () => {
  return (
    <>
      <Helmet>
        <title>PPDB 2025 - SMKN Jawa Tengah Pati</title>
        <meta
          name="description"
          content="Pendaftaran Peserta Didik Baru (PPDB) SMKN Jawa Tengah Pati tahun ajaran 2025/2026. Gratis 100% untuk siswa kurang mampu."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-4">
                <Calendar className="w-4 h-4" />
                Pendaftaran Dibuka!
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                PPDB 2025/2026
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
                Raih kesempatan pendidikan <span className="font-bold text-accent">100% GRATIS</span> di sekolah kejuruan unggulan dengan sistem boarding school
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" className="text-lg" asChild>
                  <a href="#daftar">
                    <FileText className="w-5 h-5 mr-2" />
                    Daftar Online
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Unduh Brosur
                </Button>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl font-bold text-foreground">200</p>
                  <p className="text-muted-foreground text-sm">Kuota Siswa</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl font-bold text-foreground">2</p>
                  <p className="text-muted-foreground text-sm">Program Studi</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl font-bold text-foreground">3</p>
                  <p className="text-muted-foreground text-sm">Tahun Pendidikan</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-serif text-2xl font-bold text-accent">GRATIS</p>
                  <p className="text-muted-foreground text-sm">100% Biaya</p>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Form */}
          <section id="daftar" className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
                Formulir <span className="text-primary">Pendaftaran Online</span>
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Lengkapi data diri dan upload berkas dalam format PDF (maksimal 5MB).
                Pastikan semua dokumen sudah digabungkan menjadi 1 file.
              </p>
              <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-card border border-border p-6 md:p-8">
                <PPDBRegistrationForm />
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                Jadwal <span className="text-primary">Pendaftaran</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div
                      key={item.step}
                      className={`flex gap-6 p-6 rounded-xl border-2 transition-all ${item.status === "active"
                        ? "bg-primary/5 border-primary"
                        : "bg-card border-border"
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg ${item.status === "active"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                        }`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-serif text-xl font-bold text-foreground">
                            {item.title}
                          </h3>
                          {item.status === "active" && (
                            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                              Sedang Berlangsung
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium text-sm mb-2">
                          {item.date}
                        </p>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Requirements & Documents */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Requirements */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Syarat <span className="text-primary">Pendaftaran</span>
                  </h2>
                  <div className="bg-card rounded-xl shadow-card border border-border p-6">
                    <ul className="space-y-4">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Dokumen <span className="text-primary">Diperlukan</span>
                  </h2>
                  <div className="bg-card rounded-xl shadow-card border border-border p-6">
                    <ul className="space-y-4">
                      {documents.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Butuh Bantuan?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Hubungi panitia PPDB untuk informasi lebih lanjut
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+6282112345678"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +62 821 1234 5678
                </a>
                <a
                  href="mailto:ppdb@smknjatengpati.sch.id"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  ppdb@smknjatengpati.sch.id
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PPDB;
