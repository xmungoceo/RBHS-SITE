import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Our Services | Riverbend Imaging',
  description: 'Explore our comprehensive range of imaging services including MRI, CT, and X-ray. State-of-the-art technology with expert care.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <Navigation />
      <Services />
      <Footer />
    </main>
  );
} 