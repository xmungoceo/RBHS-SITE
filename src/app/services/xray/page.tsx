import { Metadata } from 'next';
import { SERVICES } from '@/constants/siteInfo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${SERVICES.xray.name} | Riverbend Imaging`,
  description: SERVICES.xray.longDescription,
};

export default function XRayPage() {
  const service = SERVICES.xray;

  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <Navigation />
      
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight">
                {service.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                {service.longDescription}
              </p>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <Link
                href="/schedule"
                className="inline-flex items-center rounded-md bg-riverbend-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-riverbend-dark-teal"
              >
                Schedule Now
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Preparation Instructions</h2>
              <ul className="space-y-4">
                {service.preparations.map((prep, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-riverbend-teal/10 text-riverbend-teal">
                      •
                    </span>
                    <span className="ml-3 text-gray-600">{prep}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Important Information</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Duration</dt>
                  <dd className="mt-1 text-gray-900">{service.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Insurance</dt>
                  <dd className="mt-1">
                    <ul className="list-disc list-inside text-gray-900 space-y-1">
                      {service.insurance.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/services"
              className="text-riverbend-teal hover:text-riverbend-dark-teal font-semibold inline-flex items-center"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 