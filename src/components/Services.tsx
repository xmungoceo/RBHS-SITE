import { SERVICES } from '@/constants/siteInfo';
import Link from 'next/link';

export default function Services() {
  const services = [
    { key: 'mri', ...SERVICES.mri },
    { key: 'ct', ...SERVICES.ct },
    { key: 'xray', ...SERVICES.xray },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of imaging services using state-of-the-art technology,
            delivered with expert care and attention to detail.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.key}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl bg-white"
            >
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Duration</dt>
                      <dd className="mt-1 text-sm text-gray-900">{service.duration}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Key Preparations</dt>
                      <dd className="mt-2">
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {service.preparations.slice(0, 3).map((prep: string, index: number) => (
                            <li key={index}>{prep}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-x-4">
                  <Link
                    href={`/services/${service.key}`}
                    className="flex-1 text-center rounded-md bg-riverbend-teal px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-riverbend-dark-teal"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/schedule"
                    className="flex-1 text-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-riverbend-teal ring-1 ring-inset ring-riverbend-teal hover:bg-gray-50"
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Need Help Choosing?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team is here to help you determine which imaging service is right for you.
            Contact us for guidance or to learn more about our services.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-riverbend-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-riverbend-dark-teal"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 