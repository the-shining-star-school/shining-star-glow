import { Award, Users, Heart, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years of Excellence',
    color: 'text-neon-yellow',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Families',
    color: 'text-neon-cyan',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Parent Satisfaction',
    color: 'text-neon-pink',
  },
  {
    icon: GraduationCap,
    value: '30+',
    label: 'Impactful Staff',
    color: 'text-primary',
  },
];

const ImpactStats = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className={`h-12 w-12 mb-4 ${stat.color}`} strokeWidth={1.5} />
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
