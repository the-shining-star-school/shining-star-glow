import HeroCarousel from '@/components/home/HeroCarousel';
import ImpactStats from '@/components/home/ImpactStats';
import USPSection from '@/components/home/USPSection';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {
  return (
    <main>
      <HeroCarousel />
      <ImpactStats />
      <USPSection />
      <Gallery />
      <Testimonials />
    </main>
  );
};

export default Home;
