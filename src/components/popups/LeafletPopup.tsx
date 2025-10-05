import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import leafletImage from '@/assets/leaflet-popup.jpg';

interface LeafletPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeafletPopup = ({ isOpen, onClose }: LeafletPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="destructive"
            size="icon"
            className="absolute top-4 right-4 z-10 rounded-full shadow-lg"
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={leafletImage}
            alt="The Shining Star School Leaflet"
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeafletPopup;
