import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { 
  BeakerIcon, 
  HeartIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

interface Service {
  name: string;
  description: string;
  href: string;
  icon?: 'beaker' | 'heart' | 'users';
}

interface ServicesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  services: Service[];
}

const getServiceIcon = (icon?: string) => {
  switch (icon) {
    case 'beaker':
      return <BeakerIcon className="h-6 w-6 text-riverbend-teal" />;
    case 'heart':
      return <HeartIcon className="h-6 w-6 text-riverbend-teal" />;
    case 'users':
      return <UserGroupIcon className="h-6 w-6 text-riverbend-teal" />;
    default:
      return <BeakerIcon className="h-6 w-6 text-riverbend-teal" />;
  }
};

export default function ServicesSection({ subtitle, title, description, services }: ServicesSectionProps) {
  return (
    <section 
      className="bg-riverbend-off-white py-24 sm:py-32 border-t border-gray-100"
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
          <p className="mt-6 text-lg leading-8 text-gray-700">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article 
              key={service.name}
              className="flex flex-col bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              <div className="flex items-center gap-x-4 mb-4">
                {getServiceIcon(service.icon)}
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  {service.name}
                </h3>
              </div>
              <div className="flex flex-auto flex-col text-base leading-7 text-gray-700">
                <p className="flex-auto">{service.description}</p>
                <div className="mt-6">
                  <Link
                    href={service.href}
                    className="inline-flex items-center rounded-md bg-riverbend-teal px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-riverbend-dark-teal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-riverbend-teal transition-colors"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn more
                    <ChevronRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 