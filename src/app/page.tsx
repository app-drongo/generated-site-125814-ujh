import CardsFeatures from '../components/CardsFeatures';
import FormContact from '../components/FormContact';
import CenteredHero from '../components/CenteredHero';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="features" className="scroll-mt-16">
        <CardsFeatures />
      </section>
      <section id="contact" className="scroll-mt-16">
        <FormContact />
      </section>
      <section id="hero" className="scroll-mt-16">
        <CenteredHero />
      </section>
    </main>
  );
}