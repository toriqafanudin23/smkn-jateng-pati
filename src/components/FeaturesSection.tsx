import { Home, Shield, DollarSign, Award, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Boarding School",
    description: "Fasilitas asrama yang nyaman dan kondusif untuk fokus belajar.",
  },
  {
    icon: Shield,
    title: "Semi Militer",
    description: "Pendidikan karakter berbasis kedisiplinan dan kepemimpinan.",
  },
  {
    icon: DollarSign,
    title: "100% Gratis",
    description: "Tidak ada biaya apapun untuk siswa kurang mampu yang lolos seleksi.",
  },
  {
    icon: Award,
    title: "Prestasi Unggul",
    description: "Meraih berbagai penghargaan di tingkat nasional dan internasional.",
  },
  {
    icon: Users,
    title: "Tenaga Ahli",
    description: "Diajar oleh guru-guru berpengalaman dan praktisi industri.",
  },
  {
    icon: BookOpen,
    title: "Kurikulum Industri",
    description: "Kurikulum berbasis kebutuhan industri dan dunia kerja.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Keunggulan Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mengapa <span className="text-primary">SMKN Jawa Tengah?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Menyediakan pendidikan vokasi berkualitas tinggi secara gratis untuk anak bangsa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-2xl shadow-sm hover:shadow-card transition-all duration-300 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
