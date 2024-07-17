import React from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative">
        <Image src={src} alt={alt} width={1000} height={1000} className="max-w-full max-h-[90vh] object-contain" />
        <button 
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;