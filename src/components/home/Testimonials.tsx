import { Star } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';

const testimonials = [
  {
    name: 'Mrs. Priya Sharma',
    image: testimonial1,
    text: "The Shining Star School has been instrumental in my child's growth. The teachers are caring, and the curriculum is excellent. We couldn't be happier!",
    rating: 5,
  },
  {
    name: 'Mr. Rajesh Kumar',
    image: testimonial1,
    text: 'Outstanding infrastructure and dedicated faculty. My daughter has shown remarkable improvement in academics and extracurricular activities.',
    rating: 5,
  },
  {
    name: 'Mrs. Anjali Verma',
    image: testimonial1,
    text: 'A school that truly cares about each child. The individual attention and holistic approach to education make it the best choice in Jaipur.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from families who trust us with their children's education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neon-yellow text-neon-yellow" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
