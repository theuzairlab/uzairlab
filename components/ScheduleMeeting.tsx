'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';

interface ScheduleMeetingProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleMeeting = ({ isOpen, onClose }: ScheduleMeetingProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#131313] border-none text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">Schedule a Meeting</DialogTitle>
          <p className="text-gray-400">
            Book a time slot that works best for you. I'll be happy to discuss your project or answer any questions you may have.
          </p>
        </DialogHeader>
        <div className="w-full h-[600px] rounded-lg overflow-hidden mt-4">
          <InlineWidget
            url="https://calendly.com/uzairullah397"
            styles={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleMeeting; 