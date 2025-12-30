import { Trophy, Users, GraduationCap, Building } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "1,200+",
    label: "Siswa Aktif",
    description: "Dari seluruh Indonesia",
  },
  {
    icon: Trophy,
    value: "150+",
    label: "Prestasi",
    description: "Tingkat Nasional & Regional",
  },
  {
    icon: Users,
    value: "85+",
    label: "Tenaga Pengajar",
    description: "Berpengalaman & Profesional",
  },
  {
    icon: Building,
    value: "25+",
    label: "Mitra Industri",
    description: "Kerja Sama Praktik Kerja",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Tiada Hari <span className="text-accent">Tanpa Prestasi</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Berkomitmen mencetak generasi unggul, berkarakter, dan siap bersaing
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl mb-4 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </h3>
              <p className="font-semibold text-primary-foreground text-sm md:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-primary-foreground/70 text-xs md:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
