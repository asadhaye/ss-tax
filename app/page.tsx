import Services from '../app/components/Services';
import Articles from '../app/components/Articles';
import TaxCalculators from '../app/components/TaxCalculators';
import JoinCommunity from '../app/components/JoinCommunity';
import Hero from '../app/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Articles />
      <TaxCalculators />
      <JoinCommunity />
    </main>
  );
}