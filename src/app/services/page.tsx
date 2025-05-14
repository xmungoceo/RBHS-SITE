import Link from 'next/link'
import { SERVICES } from '@/constants/siteInfo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Services | Riverbend Imaging',
  description: 'Comprehensive medical imaging services including MRI, CT scans, and X-rays at Riverbend Imaging.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <Navigation />
      
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-riverbend-navy sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of advanced imaging services using state-of-the-art technology and expert interpretation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Object.entries(SERVICES).map(([key, service]) => (
              <div key={key} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-riverbend-navy">{service.name}</h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Duration:</h4>
                    <p className="mt-1 text-sm text-gray-600">{service.duration}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Key Preparations:</h4>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      {service.preparations.slice(0, 2).map((prep, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">•</span>
                          {prep}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/services/${key}`}
                      className="text-riverbend-teal hover:text-riverbend-dark-teal font-semibold text-sm inline-flex items-center"
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-teal p-8 text-white">
            <h3 className="text-lg font-semibold">Insurance & Appointments</h3>
            <p className="mt-2">
              We accept most major insurance plans and can help verify your coverage. Contact us to schedule an appointment or learn more about our services.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-riverbend-navy shadow hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 