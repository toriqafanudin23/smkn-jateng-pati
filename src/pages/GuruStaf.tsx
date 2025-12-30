import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, GraduationCap, Award, Users } from "lucide-react";

const kepalaSekolah = {
  name: "Drs. H. Ahmad Syafii, M.Pd.",
  position: "Kepala Sekolah",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  education: "S2 Pendidikan - Universitas Negeri Semarang",
  motto: "Pendidikan adalah kunci untuk membuka pintu masa depan.",
};

const teachers = [
  {
    id: 1,
    name: "Ir. Siti Aminah, M.T.",
    position: "Ketua Program TPHP",
    department: "TPHP",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Bambang Susilo, S.T., M.Eng.",
    position: "Ketua Program TPBO",
    department: "TPBO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dra. Endang Wahyuni",
    position: "Guru Mata Pelajaran",
    department: "TPHP",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Agus Prasetyo, S.Pd.",
    position: "Guru Mata Pelajaran",
    department: "TPBO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Sri Rahayu, S.T.",
    position: "Instruktur Praktik",
    department: "TPHP",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Hendra Wijaya, S.T.",
    position: "Instruktur Praktik",
    department: "TPBO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
];

const staff = [
  { name: "Suparman, S.E.", position: "Kepala Tata Usaha" },
  { name: "Dewi Kusuma", position: "Staf Administrasi" },
  { name: "Rudi Hartono", position: "Staf Keuangan" },
  { name: "Slamet Widodo", position: "Koordinator Asrama" },
  { name: "Yanti Susanti", position: "Petugas Perpustakaan" },
  { name: "Budi Santoso", position: "Teknisi Lab & Bengkel" },
];

const GuruStaf = () => {
  return (
    <>
      <Helmet>
        <title>Guru & Staf - SMKN Jawa Tengah Pati</title>
        <meta
          name="description"
          content="Profil tenaga pendidik dan karyawan SMKN Jawa Tengah Pati yang berpengalaman dan profesional."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-4">
                Tim Kami
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Guru & Staf
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Tenaga pendidik berpengalaman yang siap membimbing siswa menuju kesuksesan
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <GraduationCap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-foreground">85+</p>
                  <p className="text-muted-foreground text-sm">Tenaga Pengajar</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-foreground">70%</p>
                  <p className="text-muted-foreground text-sm">Bersertifikasi</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-foreground">30+</p>
                  <p className="text-muted-foreground text-sm">Staf Pendukung</p>
                </div>
              </div>
            </div>
          </section>

          {/* Kepala Sekolah */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl shadow-card-hover overflow-hidden border border-border">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1">
                      <img
                        src={kepalaSekolah.image}
                        alt={kepalaSekolah.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-8">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4">
                        Kepala Sekolah
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {kepalaSekolah.name}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {kepalaSekolah.education}
                      </p>
                      <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-6">
                        "{kepalaSekolah.motto}"
                      </blockquote>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <a href="mailto:kepala@smknjatengpati.sch.id" className="flex items-center gap-2 text-primary hover:underline">
                          <Mail className="w-4 h-4" />
                          kepala@smknjatengpati.sch.id
                        </a>
                        <a href="tel:+6282112345678" className="flex items-center gap-2 text-primary hover:underline">
                          <Phone className="w-4 h-4" />
                          +62 821 1234 5678
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teachers */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                Tenaga <span className="text-primary">Pendidik</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {teachers.map((teacher, index) => (
                  <div
                    key={teacher.id}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative pt-8 px-8">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary transition-colors"
                      />
                      <span className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold ${
                        teacher.department === "TPHP" 
                          ? "bg-green-500/10 text-green-600" 
                          : "bg-blue-500/10 text-blue-600"
                      }`}>
                        {teacher.department}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {teacher.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Staff */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                Staf <span className="text-primary">Pendukung</span>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {staff.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GuruStaf;
