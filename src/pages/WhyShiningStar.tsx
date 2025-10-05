import { BookOpen, Users, Building2, Lightbulb, Trophy, Heart, Star, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum spans Pre-Primary to K-10, carefully designed to meet international standards while being relevant to Indian culture and values.',
    highlights: ['Age-appropriate learning', 'Skill-based education', 'Regular assessments', 'Personalized learning paths'],
    color: 'from-primary to-neon-cyan',
  },
  {
    icon: Lightbulb,
    title: 'Experiential Learning',
    description: 'We believe in learning by doing. Our hands-on activities, field trips, and real-world problem solving make education engaging and memorable.',
    highlights: ['Interactive sessions', 'Project-based learning', 'Field trips & excursions', 'Practical applications'],
    color: 'from-neon-yellow to-accent',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Our teachers are mentors, guides, and role models. With qualifications from top institutions, they bring the best teaching practices to the classroom.',
    highlights: ['IIT/IIM alumni management', 'Regular training programs', 'Low student-teacher ratio', 'Dedicated support staff'],
    color: 'from-accent to-neon-pink',
  },
  {
    icon: Building2,
    title: 'World-Class Infrastructure',
    description: 'State-of-the-art facilities designed to provide a safe, comfortable, and inspiring learning environment for every student.',
    highlights: ['Smart classrooms', 'Science & computer labs', 'Sports facilities', 'Safe and secure campus'],
    color: 'from-neon-cyan to-neon-green',
  },
  {
    icon: Trophy,
    title: 'Focus on Excellence',
    description: 'We maintain high academic standards while encouraging students to excel in sports, arts, and extracurricular activities.',
    highlights: ['Academic excellence', 'Sports achievements', 'Cultural programs', 'Competition success'],
    color: 'from-neon-green to-primary',
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'A warm, inclusive atmosphere where every child feels valued and supported. We focus on emotional well-being and character development.',
    highlights: ['Individual attention', 'Counseling support', 'Parent involvement', 'Character building programs'],
    color: 'from-neon-pink to-accent',
  },
];

const WhyShiningStar = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-12 h-12 text-neon-yellow fill-neon-yellow animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-hero bg-clip-text text-transparent">
                Why Shining Star?
              </h1>
              <Sparkles className="w-12 h-12 text-accent animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Where Bright Minds Shine Brighter! ✨
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jaipur's most loved school for a reason - discover what makes us special
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 shadow-glow animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Join Our Family? 🎉
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the difference that quality education makes. Schedule a campus tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Apply Now 🚀
              </a>
              <a
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Contact Us 📞
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyShiningStar;
