import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export default function Hero({ title, description, image, gradient }: HeroProps) {
  return (
    <section 
      className="relative bg-white"
      aria-labelledby="hero-title"
    >
      <div className="relative aspect-[16/9] sm:aspect-[21/9]">
        <Image
          src={image}
          alt="Medical imaging facility"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
      </div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <h1 
            id="hero-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100 max-w-xl">
            {description}
          </p>
          <div className="mt-10 flex gap-x-6">
            <Link
              href="/schedule"
              className="rounded-md bg-riverbend-teal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-riverbend-dark-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-riverbend-teal transition-colors"
              aria-label="Schedule an appointment"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/services"
              className="group text-sm font-semibold leading-6 text-white hover:text-riverbend-teal transition-colors"
              aria-label="Learn more about our services"
            >
              Learn more 
              <ChevronRightIcon className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 