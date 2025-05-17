import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface Service {
  name: string;
  description: string;
  href: string;
}

interface ServicesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  services: Service[];
}

export default function ServicesSection({ subtitle, title, description, services }: ServicesSectionProps) {
  return (
    <section 
      className="bg-riverbend-off-white py-24 sm:py-32"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-riverbend-teal">
            {subtitle}
          </h2>
          <p 
            id="services-title"
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article 
              key={service.name}
              className="flex flex-col"
            >
              <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                {service.name}
              </h3>
              <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{service.description}</p>
                <p className="mt-6">
                  <Link
                    href={service.href}
                    className="group text-sm font-semibold leading-6 text-riverbend-teal hover:text-riverbend-dark-teal transition-colors"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn more
                    <ChevronRightIcon className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 