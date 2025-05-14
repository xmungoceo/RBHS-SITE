import Link from 'next/link'
import { CLINIC_INFO } from '@/constants/siteInfo'

export default function Footer() {
  return (
    <footer className="bg-riverbend-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>{CLINIC_INFO.address.street}</p>
              <p>{CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}</p>
              <p className="mt-4">
                <span className="font-semibold">Phone:</span> {CLINIC_INFO.contact.phone}
              </p>
              <p>
                <span className="font-semibold">Fax:</span> {CLINIC_INFO.contact.fax}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href={`mailto:${CLINIC_INFO.contact.email}`} className="hover:text-riverbend-teal">
                  {CLINIC_INFO.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours of Operation</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Monday:</span> {CLINIC_INFO.hours.monday}</li>
              <li><span className="font-semibold">Tuesday:</span> {CLINIC_INFO.hours.tuesday}</li>
              <li><span className="font-semibold">Wednesday:</span> {CLINIC_INFO.hours.wednesday}</li>
              <li><span className="font-semibold">Thursday:</span> {CLINIC_INFO.hours.thursday}</li>
              <li><span className="font-semibold">Friday:</span> {CLINIC_INFO.hours.friday}</li>
              <li><span className="font-semibold">Saturday:</span> {CLINIC_INFO.hours.saturday}</li>
              <li><span className="font-semibold">Sunday:</span> {CLINIC_INFO.hours.sunday}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-riverbend-teal">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-riverbend-teal">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/patient-info" className="hover:text-riverbend-teal">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-riverbend-teal">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href={CLINIC_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-riverbend-teal"
                >
                  Facebook
                </a>
                <a
                  href={CLINIC_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-riverbend-teal"
                >
                  Twitter
                </a>
                <a
                  href={CLINIC_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-riverbend-teal"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 