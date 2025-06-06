import Hero from '../app/components/Hero';
import Services from '../app/components/Services';
import Articles from '../app/components/Articles';
import TaxCalculators from '../app/components/TaxCalculators';
import JoinCommunity from '../app/components/JoinCommunity';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Services Teaser */}
      <section className="py-16 bg-ceo dark:bg-cfo">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <Services previewCount={3} showHeading={false} />
          </div>
          <Link href="/services" className="inline-block bg-primary text-text-light px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 mt-4">View All Services</Link>
        </div>
      </section>
      {/* Articles Teaser */}
      <section className="py-16 bg-ceo dark:bg-cfo">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <Articles previewCount={3} showHeading={false} />
          </div>
          <Link href="/articles" className="inline-block bg-primary text-text-light px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 mt-4">Read More Articles</Link>
        </div>
      </section>
      {/* Calculators Teaser */}
      <section className="py-16 bg-ceo dark:bg-cfo">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tax Calculators</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <TaxCalculators previewCount={1} showHeading={false} />
          </div>
          <Link href="/calculators" className="inline-block bg-primary text-text-light px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 mt-4">Explore Calculators</Link>
        </div>
      </section>
      {/* Community Teaser */}
      <section className="py-16 bg-ceo dark:bg-cfo">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <div className="max-w-2xl mx-auto mb-8">
            <JoinCommunity previewOnly showHeading={false} />
          </div>
          <Link href="/community" className="inline-block bg-primary text-text-light px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 mt-4">Learn More</Link>
        </div>
      </section>
    </main>
  );
}