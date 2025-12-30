import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryItems = [
  {
    image: gallery1,
    title: "Upacara Bendera",
    description: "Kedisiplinan dan semangat nasionalisme siswa SMKN Jawa Tengah Pati",
  },
  {
    image: gallery2,
    title: "Laboratorium TPHP",
    description: "Praktikum Teknologi Pengelolaan Hasil Pertanian",
  },
  {
    image: gallery3,
    title: "Bengkel TPBO",
    description: "Praktik Teknik Perbaikan Bodi Otomotif",
  },
  {
    image: gallery4,
    title: "Asrama Siswa",
    description: "Fasilitas boarding school yang nyaman dan kondusif",
  },
];

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeri <span className="text-primary">Sekolah</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jelajahi kegiatan dan fasilitas SMKN Jawa Tengah Pati
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card-hover group">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  index === currentIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ring-offset-2",
                  index === currentIndex
                    ? "ring-2 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
