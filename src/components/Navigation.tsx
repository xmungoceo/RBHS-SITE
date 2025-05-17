'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Patient Info', href: '/patient-info' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Skip to main content link - hidden by default, visible on focus */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-riverbend-teal focus:outline-none focus:ring-2 focus:ring-riverbend-teal"
      >
        Skip to main content
      </a>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f0f0f0] backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-1 px-6 lg:py-1.5 lg:px-8" aria-label="Main navigation">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 focus:outline-none focus:ring-2 focus:ring-riverbend-teal rounded-md">
              <Image
                src="/images/RBHC-Horizontal.png"
                alt="Riverbend Health Center"
                width={160}
                height={38}
                priority
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-riverbend-teal focus:outline-none focus:ring-2 focus:ring-riverbend-teal"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 px-3 py-1 rounded-md
                  ${pathname === item.href 
                    ? 'text-riverbend-teal bg-riverbend-teal/5' 
                    : 'text-gray-900 hover:text-riverbend-teal'
                  } 
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-riverbend-teal`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link 
              href="/schedule" 
              className="text-sm font-semibold leading-6 px-5 py-1.5 rounded-md bg-riverbend-teal text-white hover:bg-riverbend-dark-teal transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-riverbend-teal"
            >
              Schedule Appointment
            </Link>
          </div>
        </nav>
        <Dialog 
          as="div" 
          className="lg:hidden" 
          open={mobileMenuOpen} 
          onClose={setMobileMenuOpen}
          id="mobile-menu"
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 focus:outline-none focus:ring-2 focus:ring-riverbend-teal rounded-md">
                <Image
                  src="/images/RBHC-Horizontal.png"
                  alt="Riverbend Health Center"
                  width={160}
                  height={38}
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-riverbend-teal focus:outline-none focus:ring-2 focus:ring-riverbend-teal"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-4 py-1.5 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-riverbend-teal
                        ${pathname === item.href ? 'text-riverbend-teal bg-riverbend-teal/5' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/schedule"
                    className="-mx-3 block rounded-lg px-4 py-2 text-sm font-semibold leading-7 text-white bg-riverbend-teal hover:bg-riverbend-dark-teal transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-riverbend-teal"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
} 