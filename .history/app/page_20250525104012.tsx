import Navbar from '../components/Navbar';
import Services from '../components/Services';
import JoinCommunity from '../components/JoinCommunity';
import Footer from '../components/Footer';
import AuthProvider from '../lib/AuthProvider';
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