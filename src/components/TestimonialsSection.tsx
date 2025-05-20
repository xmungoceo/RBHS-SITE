import Image from 'next/image'

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ title, subtitle, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="bg-riverbend-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-riverbend-teal">
            {subtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl"
            >
              <div className="flex-1">
                <p className="text-lg leading-8 text-gray-600">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <Image
                  className="h-10 w-10 rounded-full bg-gray-50"
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                  <div className="text-gray-600">{testimonial.author.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 