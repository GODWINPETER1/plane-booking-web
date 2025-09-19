import HeroImageSlider from './HeroImageSlider';
import SearchCard from './SearchCard';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <HeroImageSlider />
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-left px-4">
        <SearchCard />
      </div>
    </div>
  );
}