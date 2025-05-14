import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Medical imaging facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50" />
        </div>
        
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Advanced Medical Imaging<br />with Compassionate Care
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100 max-w-xl">
            Riverbend Imaging provides state-of-the-art diagnostic imaging services with a focus on patient comfort and accurate results.
          </p>
          <div className="mt-10 flex gap-x-6">
            <Link
              href="/schedule"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Comprehensive Care</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Imaging Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a wide range of imaging services using the latest technology to provide accurate diagnoses and guide treatment decisions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        href={service.href}
                        className="text-sm font-semibold leading-6 text-blue-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}

const services = [
  {
    name: 'MRI Scanning',
    description: 'High-resolution magnetic resonance imaging for detailed views of organs, tissues, and skeletal system.',
    href: '/services/mri',
  },
  {
    name: 'CT Scanning',
    description: 'Advanced computed tomography scans providing detailed cross-sectional images of your body.',
    href: '/services/ct',
  },
  {
    name: 'X-Ray Services',
    description: 'Digital X-ray imaging for quick and accurate diagnosis of bone and chest conditions.',
    href: '/services/x-ray',
  },
]
