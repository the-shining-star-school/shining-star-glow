import { BookOpen, Users, Sparkles, Trophy, Brain, Heart } from 'lucide-react';

const usps = [
  {
    icon: BookOpen,
    title: 'Holistic Curriculum',
    description: 'Comprehensive education from Pre-Primary to K-10 with focus on all-round development',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Highly qualified teachers with IIT/IIM management background',
  },
  {
    icon: Sparkles,
    title: 'Experiential Learning',
    description: 'Hands-on activities and real-world applications to enhance understanding',
  },
  {
    icon: Trophy,
    title: 'Excellence in Academics',
    description: 'Proven track record of outstanding academic achievements',
  },
  {
    icon: Brain,
    title: 'Innovative Teaching',
    description: 'Modern teaching methodologies and technology-integrated classrooms',
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'Safe, caring atmosphere that encourages growth and confidence',
  },
];

const USPSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Why Choose The Shining Star School?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide a unique educational experience that prepares students for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero shadow-glow group-hover:scale-110 transition-transform">
                    <usp.icon className="h-10 w-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
