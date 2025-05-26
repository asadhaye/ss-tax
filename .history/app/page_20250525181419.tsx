import Navbar from '../app/components/Navbar';
import Services from '../app/components/Services';
import Articles from '../app/components/Articles';
import TaxCalculators from '../app/components/TaxCalculators';
import JoinCommunity from '../app/components/JoinCommunity';
import Footer from '../app/components/Footer';
import AuthProvider from '../app/lib/AuthProvider';
export default function Home() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Services />
        <Articles />
        <TaxCalculators />
        <JoinCommunity />
      </main>
      <Footer />
    </AuthProvider>
  );
}