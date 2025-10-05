import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We will get back to you as soon as possible.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to know more about The Shining Star School.', '_blank');
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to answer your questions and help you learn more about our school
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 shadow-glow">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      The Shining Star School<br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@shiningstarschool.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@shiningstarschool.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">School Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 2:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                className="w-full mt-8 bg-[#25D366] hover:bg-[#20BA5A] text-white"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-hero shadow-glow" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-4 shadow-card">
            <h2 className="text-3xl font-bold mb-6 px-4">Find Us on Map</h2>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.205655958038!2d75.72017027487003!3d26.96038595804131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2d70042d00d%3A0x2bb93250ef625788!2sThe%20Shining%20Star%20School!5e0!3m2!1sen!2sin!4v1759659727369!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Shining Star School Location"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
