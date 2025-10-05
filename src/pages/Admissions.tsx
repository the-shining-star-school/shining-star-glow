import { useState } from 'react';
import { FileText, CheckCircle, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We will contact you soon to schedule a meeting.",
    });
    setFormData({
      childName: '',
      childAge: '',
      parentName: '',
      phone: '',
      address: '',
    });
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Admissions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the family of 1000+ satisfied parents. Enroll your child today!
          </p>
        </div>

        {/* Admission Process */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Submit Enquiry', description: 'Fill out the admission enquiry form online or visit our campus' },
              { icon: Calendar, title: 'Campus Tour', description: 'Schedule a visit to see our facilities and meet our faculty' },
              { icon: Users, title: 'Interaction', description: 'Meet with our counselors and discuss your child\'s educational needs' },
              { icon: CheckCircle, title: 'Enrollment', description: 'Complete the documentation and secure your child\'s admission' },
            ].map((step, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 shadow-glow">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Age Criteria */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-3xl font-bold mb-6">Age Criteria & Class Eligibility</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Pre-Primary</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Nursery: 2.5 - 3.5 years
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    LKG: 3.5 - 4.5 years
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    UKG: 4.5 - 5.5 years
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Primary & Secondary</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Class 1-5: As per CBSE guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Class 6-10: Based on previous academic performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-secondary rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Birth Certificate (Original & Copy)',
                'Transfer Certificate (if applicable)',
                'Previous Academic Records',
                'Passport Size Photographs (Child & Parents)',
                'Address Proof',
                'Medical Records / Immunization Certificate',
                'Aadhar Card Copy',
                'Parent ID Proof',
              ].map((doc, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">Admission FAQs</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                When does the admission process start?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Admissions typically open in January for the upcoming academic year. However, we accept applications throughout the year based on seat availability.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Is there an entrance test?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For Pre-Primary classes, there is a simple interaction with the child. For higher classes, a basic assessment may be conducted to understand the child's current academic level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                What is the fee structure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our fee structure varies by grade level. Please contact our admissions office for detailed information. We also offer flexible payment plans to support families.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Do you offer transportation facilities?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide safe and reliable bus transportation covering various routes across Jaipur. Transportation fees are separate from tuition fees.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Enquiry Form */}
        <section className="animate-fade-in">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-hero bg-clip-text text-transparent">
              Submit Your Enquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="childName">Child's Name *</Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="childAge">Child's Age *</Label>
                <Input
                  id="childAge"
                  type="number"
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="parentName">Parent's Name *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-hero shadow-glow text-lg py-6">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Admissions;
