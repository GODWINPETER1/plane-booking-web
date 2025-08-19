import { useState, useEffect } from 'react';

export default function HeroImageSlider() {
  const images: string[] = [
    // This is a direct image link format. Replace with your actual link.
    'https://img.freepik.com/premium-photo/blue-web-page-design-template-project-delivery-transport-airplane-mockup-place-your-advertisement-modern-concept-website-mobile-website-development-3d-rendering_670147-24816.jpg', 
    'https://placehold.co/1920x1080/3A548E/ffffff?text=Your+Next+Adventure',
    'https://placehold.co/1920x1080/543C6E/ffffff?text=Book+with+Ease',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}