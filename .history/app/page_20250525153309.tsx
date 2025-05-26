import Navbar from '../app/components/Navbar';
import Services from '../app/components/Services';
import JoinCommunity from '../app/components/JoinCommunity';
import Footer from '../app/components/Footer';
import AuthProvider from '../app/lib/AuthProvider';
export default function Home() {
  return (
    <AuthProvider>
      <Navbar />
      <Services />
      <JoinCommunity />
      <Footer />
    </AuthProvider>
  );
}