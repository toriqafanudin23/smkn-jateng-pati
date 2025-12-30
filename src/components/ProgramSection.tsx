import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Car, ArrowRight, Clock, Users, Award } from "lucide-react";

const programs = [
  {
    id: "tphp",
    name: "Teknologi Pengelolaan Hasil Pertanian",
    shortName: "TPHP",
    description:
      "Program keahlian yang mempelajari pengolahan hasil pertanian, teknologi pangan, dan industri makanan. Lulusan siap bekerja di industri makanan dan minuman.",
    icon: Leaf,
    color: "bg-green-500",
    highlights: [
      "Teknologi Pengolahan Pangan",
      "Pengemasan & Hygiene",
      "Kewirausahaan Pangan",
    ],
    duration: "3 Tahun",
    graduates: "500+",
    achievements: "25+",
  },
  {
    id: "tpbo",
    name: "Teknik Perbaikan Bodi Otomotif",
    shortName: "TPBO",
    description:
      "Program keahlian yang fokus pada perbaikan bodi kendaraan, cat otomotif, dan pengelasan. Lulusan siap bekerja di bengkel resmi dan industri otomotif.",
    icon: Car,
    color: "bg-blue-500",
    highlights: [
      "Perbaikan Bodi & Cat",
      "Pengelasan Otomotif",
      "Restorasi Kendaraan",
    ],
    duration: "3 Tahun",
    graduates: "400+",
    achievements: "30+",
  },
];

const ProgramSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Program Studi
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pilih <span className="text-primary">Jurusanmu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dua program keahlian unggulan yang siap mengantarmu menuju karir cemerlang
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Header */}
              <div className="relative p-8 pb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${program.color} rounded-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute top-6 right-6 px-3 py-1 bg-secondary text-foreground text-sm font-bold rounded-lg">
                  {program.shortName}
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 leading-tight">
                  {program.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-8 pb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Yang Dipelajari
                </h4>
                <ul className="space-y-2">
                  {program.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="px-8 pb-6">
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-bold text-foreground">{program.duration}</p>
                    <p className="text-xs text-muted-foreground">Durasi</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-bold text-foreground">{program.graduates}</p>
                    <p className="text-xs text-muted-foreground">Lulusan</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-bold text-foreground">{program.achievements}</p>
                    <p className="text-xs text-muted-foreground">Prestasi</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 pt-0">
                <Button variant="outline" size="lg" className="w-full group/btn" asChild>
                  <Link to={`/program-studi#${program.id}`}>
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
