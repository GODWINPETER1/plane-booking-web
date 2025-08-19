import HeroImageSlider from './HeroImageSlider';
import SearchCard from './SearchCard';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <HeroImageSlider />
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-left px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 ">Search. Book. Travel.</h2>
        <SearchCard />
      </div>
    </div>
  );
}