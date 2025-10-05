import { Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12" />
              <h3 className="font-bold text-xl">The Shining Star School</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              15+ Years of Excellence in Education. Nurturing Young Minds from Pre-Primary to K-10.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Jaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@shiningstarschool.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  info@shiningstarschool.com
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">School Hours</h4>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/80">
                <p>Monday - Friday</p>
                <p className="font-semibold">8:00 AM - 2:00 PM</p>
                <p className="mt-2">Saturday</p>
                <p className="font-semibold">8:00 AM - 12:00 PM</p>
              </div>
            </div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} The Shining Star School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
