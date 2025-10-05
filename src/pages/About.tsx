import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About The Shining Star School
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where Excellence Meets Compassion in Education
          </p>
        </div>

        {/* Legacy Section */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Our Legacy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For over 15 years, The Shining Star School has been a beacon of educational excellence in Jaipur. 
              Founded with a vision to provide world-class education accessible to all, we have grown into one 
              of the most trusted educational institutions in the region.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began with a commitment to nurture young minds through innovative teaching methods 
              and a curriculum that balances academic rigor with holistic development. Today, we proudly serve 
              over 1000 families and continue to set benchmarks in quality education.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 shadow-glow animate-fade-in">
            <Target className="h-12 w-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-90">
              To provide a nurturing and stimulating environment where every child can discover their unique 
              potential, develop strong academic foundations, and grow into confident, compassionate individuals 
              ready to make a positive impact on the world.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border-2 border-accent animate-fade-in">
            <Eye className="h-12 w-12 text-accent mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be recognized as the leading educational institution that transforms lives through innovative 
              teaching, character building, and a commitment to excellence. We envision a future where our 
              students become leaders, thinkers, and change-makers in their chosen fields.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', description: 'Striving for the highest standards in everything we do' },
              { title: 'Integrity', description: 'Building character through honesty and ethical behavior' },
              { title: 'Innovation', description: 'Embracing new ideas and modern teaching methods' },
              { title: 'Compassion', description: 'Creating a caring environment for all students' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 hover:shadow-card transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management */}
        <section className="bg-card rounded-2xl p-8 md:p-12 shadow-card animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Leadership Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The Shining Star School is managed by a team of experienced educators with backgrounds from 
            premier institutions including IIT and IIM. This unique combination of academic excellence 
            and management expertise ensures that our institution remains at the forefront of educational 
            innovation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our leadership team brings decades of combined experience in education, curriculum development, 
            and child psychology. They work tirelessly to ensure that every child receives personalized 
            attention and the best possible learning environment.
          </p>
        </section>

        {/* Learning Philosophy */}
        <section className="mt-20 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Our Learning Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We believe that education is not just about textbooks and exams. From Pre-Primary to K-10, 
            our curriculum is designed to foster critical thinking, creativity, and social responsibility. 
            We emphasize experiential learning, where students learn by doing, exploring, and discovering. 
            Our approach ensures that children not only excel academically but also develop essential life 
            skills, emotional intelligence, and a love for learning that lasts a lifetime.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
