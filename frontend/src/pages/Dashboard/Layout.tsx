import Hero from '../../components/hero/Hero';
import {Navbar} from '../../components/Layout/Navbar';


export default function Layout() {

  

  return (
    <div className="font-sans min-h-screen bg-gray-100">
      <Navbar />
      <Hero/>
    </div>
  );
}