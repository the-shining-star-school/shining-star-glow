import { useState } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryItems = [
  { image: gallery1, title: 'Sports Day Excellence' },
  { image: gallery2, title: 'Science Lab Activities' },
  { image: gallery3, title: 'Creative Arts Program' },
  { image: gallery4, title: 'Technology Learning' },
  { image: gallery5, title: 'Library & Reading' },
  { image: gallery6, title: 'Cultural Events' },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Our Vibrant Campus Life
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore the diverse activities and facilities at The Shining Star School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 group animate-scale-in aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
