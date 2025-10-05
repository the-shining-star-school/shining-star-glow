import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContact = () => {
  const phoneNumber = "+919876543210"; // Replace with actual number
  const whatsappNumber = "919876543210"; // Replace with actual number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I would like to know more about The Shining Star School.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        onClick={handleCall}
        className="h-14 w-14 rounded-full shadow-glow hover:scale-110 transition-transform bg-gradient-hero"
        size="icon"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </Button>
      
      <Button
        onClick={handleWhatsApp}
        className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A]"
        size="icon"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingContact;
