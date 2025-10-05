import { BookOpen, Users, Building2, Lightbulb, Trophy, Heart } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum spans Pre-Primary to K-10, carefully designed to meet international standards while being relevant to Indian culture and values. We integrate CBSE guidelines with innovative teaching methods.',
    highlights: ['Age-appropriate learning', 'Skill-based education', 'Regular assessments', 'Personalized learning paths'],
  },
  {
    icon: Lightbulb,
    title: 'Experiential Learning Approach',
    description: 'We believe in learning by doing. Our experiential learning programs include hands-on activities, field trips, science experiments, and real-world problem solving that make education engaging and memorable.',
    highlights: ['Interactive sessions', 'Project-based learning', 'Field trips & excursions', 'Practical applications'],
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Our teachers are more than educators—they are mentors, guides, and role models. With qualifications from top institutions and continuous professional development, they bring the best teaching practices to the classroom.',
    highlights: ['IIT/IIM alumni management', 'Regular training programs', 'Low student-teacher ratio', 'Dedicated support staff'],
  },
  {
    icon: Building2,
    title: 'World-Class Infrastructure',
    description: 'Our campus features state-of-the-art facilities designed to provide a safe, comfortable, and inspiring learning environment. From modern classrooms to well-equipped labs and sports facilities.',
    highlights: ['Smart classrooms', 'Science & computer labs', 'Sports facilities', 'Safe and secure campus'],
  },
  {
    icon: Trophy,
    title: 'Focus on Excellence',
    description: 'We maintain high academic standards while encouraging students to excel in sports, arts, and extracurricular activities. Our holistic approach ensures well-rounded development.',
    highlights: ['Academic excellence', 'Sports achievements', 'Cultural programs', 'Competition success'],
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'We create a warm, inclusive atmosphere where every child feels valued and supported. Our focus on emotional well-being and character development helps students grow into confident, compassionate individuals.',
    highlights: ['Individual attention', 'Counseling support', 'Parent involvement', 'Character building programs'],
  },
];

const WhyShiningStar = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Why Choose The Shining Star School?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us Jaipur's most trusted educational institution
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold">{feature.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1">
                <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-primary to-accent' :
                  index % 3 === 1 ? 'from-accent to-neon-cyan' :
                  'from-neon-pink to-primary'
                } opacity-20`} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-hero text-primary-foreground rounded-2xl p-12 shadow-glow animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Family?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference that quality education makes. Schedule a campus tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyShiningStar;
