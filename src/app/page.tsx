import { Metadata } from 'next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import { HOME_PAGE_DATA } from "@/constants/homePageData";

export const metadata: Metadata = {
  title: 'Riverbend Imaging | Advanced Medical Imaging Services',
  description: 'Riverbend Imaging provides state-of-the-art diagnostic imaging services with a focus on patient comfort and accurate results.',
  openGraph: {
    title: 'Riverbend Imaging | Advanced Medical Imaging Services',
    description: 'State-of-the-art diagnostic imaging services with a focus on patient comfort and accurate results.',
    type: 'website',
    url: 'https://riverbendimaging.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riverbend Imaging | Advanced Medical Imaging Services',
    description: 'State-of-the-art diagnostic imaging services with a focus on patient comfort and accurate results.',
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-riverbend-teal"
      >
        Skip to main content
      </a>
      
      <Navigation />
      
      <div id="main-content" tabIndex={-1}>
        <Hero {...HOME_PAGE_DATA.hero} />
        
        <ServicesSection {...HOME_PAGE_DATA.servicesSection} services={HOME_PAGE_DATA.services} />
      </div>

      <Footer />
    </main>
  );
}
