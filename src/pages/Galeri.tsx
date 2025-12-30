import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/hero-school.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const categories = [
  { id: "all", name: "Semua" },
  { id: "kegiatan", name: "Kegiatan" },
  { id: "fasilitas", name: "Fasilitas" },
  { id: "prestasi", name: "Prestasi" },
];

const galleryItems = [
  { id: 1, image: heroImage, title: "Gedung Utama Sekolah", category: "fasilitas" },
  { id: 2, image: gallery1, title: "Upacara Bendera", category: "kegiatan" },
  { id: 3, image: gallery2, title: "Praktikum TPHP", category: "kegiatan" },
  { id: 4, image: gallery3, title: "Bengkel TPBO", category: "fasilitas" },
  { id: 5, image: gallery4, title: "Asrama Siswa", category: "fasilitas" },
  { id: 6, image: gallery1, title: "Latihan Baris-berbaris", category: "kegiatan" },
  { id: 7, image: gallery2, title: "Juara LKS Provinsi", category: "prestasi" },
  { id: 8, image: gallery3, title: "Kompetisi Otomotif", category: "prestasi" },
  { id: 9, image: heroImage, title: "Wisuda Siswa", category: "kegiatan" },
  { id: 10, image: gallery4, title: "Kegiatan Asrama", category: "kegiatan" },
  { id: 11, image: gallery2, title: "Lab Pengolahan Pangan", category: "fasilitas" },
  { id: 12, image: gallery1, title: "Penghargaan Sekolah", category: "prestasi" },
];

const Galeri = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      <Helmet>
        <title>Galeri - SMKN Jawa Tengah Pati</title>
        <meta
          name="description"
          content="Galeri foto kegiatan, fasilitas, dan prestasi SMKN Jawa Tengah Pati."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-bold text-accent-foreground mb-4">
                Dokumentasi
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Galeri Sekolah
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Jelajahi momen-momen berharga dan fasilitas unggulan kami
              </p>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-foreground hover:bg-primary/10"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-lg font-bold text-primary-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-primary-foreground/70 capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[80vh] px-4">
              <img
                src={filteredItems[currentImage].image}
                alt={filteredItems[currentImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  {filteredItems[currentImage].title}
                </h3>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  {currentImage + 1} / {filteredItems.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Galeri;
