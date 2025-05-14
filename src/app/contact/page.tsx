import { CLINIC_INFO } from '@/constants/siteInfo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | Riverbend Imaging',
  description: 'Contact Riverbend Imaging in Oakmont, PA for appointments and inquiries. We\'re here to help with all your medical imaging needs.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <Navigation />
      
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-riverbend-navy sm:text-4xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're here to help with all your medical imaging needs. Contact us for appointments, questions, or concerns.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-lg font-semibold text-riverbend-navy">Location & Hours</h3>
                <address className="mt-6 space-y-4 text-gray-600 not-italic">
                  <p className="flex items-start">
                    <svg className="h-6 w-6 flex-shrink-0 text-riverbend-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3">
                      {CLINIC_INFO.address.street}<br />
                      {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-riverbend-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3">{CLINIC_INFO.contact.phone}</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-riverbend-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3">{CLINIC_INFO.contact.email}</span>
                  </p>
                </address>

                <div className="mt-8">
                  <h4 className="text-base font-semibold text-riverbend-navy">Hours of Operation</h4>
                  <dl className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <dt>Monday - Thursday</dt>
                      <dd>{CLINIC_INFO.hours.monday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Friday</dt>
                      <dd>{CLINIC_INFO.hours.friday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Saturday</dt>
                      <dd>{CLINIC_INFO.hours.saturday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Sunday</dt>
                      <dd>{CLINIC_INFO.hours.sunday}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-teal p-8 text-white">
                <h3 className="text-lg font-semibold">Emergency Contact</h3>
                <p className="mt-2">
                  For urgent matters outside of regular business hours, please call our emergency line:
                </p>
                <p className="mt-2 text-xl font-bold">
                  {CLINIC_INFO.contact.emergency}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-riverbend-navy">Send us a Message</h3>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-riverbend-teal focus:outline-none focus:ring-1 focus:ring-riverbend-teal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-riverbend-teal focus:outline-none focus:ring-1 focus:ring-riverbend-teal"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-riverbend-teal focus:outline-none focus:ring-1 focus:ring-riverbend-teal"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-riverbend-teal focus:outline-none focus:ring-1 focus:ring-riverbend-teal"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-teal px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-riverbend-teal focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 