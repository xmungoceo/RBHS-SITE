import Image from 'next/image'
import { TEAM_MEMBERS } from '@/constants/siteInfo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Team | Riverbend Imaging',
  description: 'Meet our team of expert radiologists and imaging specialists at Riverbend Imaging.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <Navigation />
      
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet our experienced team of board-certified radiologists and imaging specialists dedicated to providing exceptional care.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {member.name}, {member.credentials}
                    </h3>
                    <p className="text-riverbend-teal font-medium mt-1">{member.role}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                    <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                      {member.specialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-sm leading-6 text-gray-600">
                    <p>{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 