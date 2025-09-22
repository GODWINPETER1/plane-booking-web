import Hero from '../../components/hero/Hero';
import {Navbar} from '../../components/Layout/Navbar';
import { PopulationDestinations } from '../../components/destinations/Destination';
import { TrustSection } from '../../components/trust/Trust';
import SpecialPromotions from '../../components/promotions/SpecialPromotions';
import { Testimonials } from '../../components/testmonial/Testmonial';
import { Newsletter } from '../../components/cta/Cta';
import { Footer } from '../../components/footer/Footer';

export default function Layout() {  

  return (
    <div className="font-sans min-h-screen bg-gray-100">
      <Navbar />
      <Hero/>
      <PopulationDestinations/>
      <TrustSection/>
      <SpecialPromotions/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}