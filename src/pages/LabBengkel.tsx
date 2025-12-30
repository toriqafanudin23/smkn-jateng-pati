import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Car, Beaker, Wrench, Cpu, Microscope } from "lucide-react";

import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const facilities = [
  {
    id: 1,
    name: "Laboratorium Pengolahan Pangan",
    program: "TPHP",
    description: "Fasilitas lengkap untuk praktik pengolahan hasil pertanian dengan peralatan standar industri.",
    image: gallery2,
    icon: Beaker,
    equipment: [
      "Mesin Pengolah Makanan",
      "Oven Industri",
      "Mesin Pengemasan",
      "Freezer & Cold Storage",
      "Peralatan Uji Kualitas",
    ],
  },
  {
    id: 2,
    name: "Laboratorium Uji Kualitas Pangan",
    program: "TPHP",
    description: "Lab untuk pengujian kualitas produk pangan dengan peralatan analisis modern.",
    image: gallery2,
    icon: Microscope,
    equipment: [
      "pH Meter Digital",
      "Refractometer",
      "Moisture Analyzer",
      "Spektrofotometer",
      "Peralatan Mikrobiologi",
    ],
  },
  {
    id: 3,
    name: "Bengkel Body Repair",
    program: "TPBO",
    description: "Bengkel lengkap untuk praktik perbaikan bodi kendaraan dengan standar industri otomotif.",
    image: gallery3,
    icon: Wrench,
    equipment: [
      "Car Lift Hidrolik",
      "Spot Welding Machine",
      "Panel Beater Tools",
      "Body Frame Machine",
      "Dent Puller",
    ],
  },
  {
    id: 4,
    name: "Spray Booth & Painting",
    program: "TPBO",
    description: "Ruang pengecatan modern dengan sistem ventilasi dan pencahayaan standar pabrik.",
    image: gallery3,
    icon: Car,
    equipment: [
      "Spray Booth Modern",
      "HVLP Spray Gun",
      "Mixing Room",
      "Infrared Paint Dryer",
      "Color Matching System",
    ],
  },
  {
    id: 5,
    name: "Workshop Pengelasan",
    program: "TPBO",
    description: "Workshop untuk praktik pengelasan berbagai jenis dengan keamanan tinggi.",
    image: gallery3,
    icon: Cpu,
    equipment: [
      "MIG Welding Machine",
      "TIG Welding Machine",
      "Spot Welder",
      "Plasma Cutter",
      "Safety Equipment",
    ],
  },
  {
    id: 6,
    name: "Dapur Industri",
    program: "TPHP",
    description: "Fasilitas dapur skala industri untuk produksi produk pangan dalam jumlah besar.",
    image: gallery2,
    icon: Leaf,
    equipment: [
      "Commercial Kitchen Range",
      "Industrial Mixer",
      "Deep Fryer",
      "Steam Cooker",
      "Prep Tables Stainless Steel",
    ],
  },
];

const LabBengkel = () => {
  return (
    <>
      <Helmet>
        <title>Laboratorium & Bengkel - SMKN Jawa Tengah Pati</title>
        <meta
          name="description"
          content="Fasilitas laboratorium dan bengkel modern SMKN Jawa Tengah Pati untuk praktik program TPHP dan TPBO."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-4">
                Fasilitas
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Lab & Bengkel
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Fasilitas praktik modern dengan peralatan standar industri untuk mencetak lulusan berkualitas
              </p>
            </div>
          </section>

          {/* Facilities Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <div
                    key={facility.id}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          facility.program === "TPHP" 
                            ? "bg-green-500 text-white" 
                            : "bg-blue-500 text-white"
                        }`}>
                          {facility.program}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <facility.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          {facility.name}
                        </h3>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm">
                        {facility.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Peralatan:
                        </h4>
                        <ul className="space-y-1">
                          {facility.equipment.slice(0, 4).map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                          {facility.equipment.length > 4 && (
                            <li className="text-sm text-primary font-medium">
                              +{facility.equipment.length - 4} peralatan lainnya
                            </li>
                          )}
                        </ul>
                      </div>
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

export default LabBengkel;
