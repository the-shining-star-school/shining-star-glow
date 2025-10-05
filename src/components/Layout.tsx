import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import LeafletPopup from './popups/LeafletPopup';
import EnquiryPopup from './popups/EnquiryPopup';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showLeafletPopup, setShowLeafletPopup] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  useEffect(() => {
    // Check if popups have been shown before
    const hasSeenPopups = sessionStorage.getItem('hasSeenPopups');
    
    if (!hasSeenPopups) {
      // Show leaflet popup after a short delay
      setTimeout(() => {
        setShowLeafletPopup(true);
      }, 1000);
    }
  }, []);

  const handleLeafletClose = () => {
    setShowLeafletPopup(false);
    // Show enquiry popup after closing leaflet popup
    setTimeout(() => {
      setShowEnquiryPopup(true);
    }, 500);
  };

  const handleEnquiryClose = () => {
    setShowEnquiryPopup(false);
    // Mark that user has seen the popups
    sessionStorage.setItem('hasSeenPopups', 'true');
  };

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingContact />
      
      {/* Popup Sequence */}
      <LeafletPopup isOpen={showLeafletPopup} onClose={handleLeafletClose} />
      <EnquiryPopup isOpen={showEnquiryPopup} onClose={handleEnquiryClose} />
    </>
  );
};

export default Layout;
