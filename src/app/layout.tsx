import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from '@/constants/siteInfo'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://riverbendimaging.com'),
  title: {
    template: '%s | Riverbend Imaging',
    default: 'Riverbend Imaging | Advanced Medical Imaging Services',
  },
  description: "State-of-the-art diagnostic imaging services with a focus on patient comfort and accurate results.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Riverbend Imaging',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: CLINIC_INFO.name,
    description: 'State-of-the-art diagnostic imaging services with a focus on patient comfort and accurate results.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.city,
      addressRegion: CLINIC_INFO.address.state,
      postalCode: CLINIC_INFO.address.zip,
      addressCountry: 'US',
    },
    telephone: CLINIC_INFO.contact.phone,
    email: CLINIC_INFO.contact.email,
    medicalSpecialty: ['Radiology', 'Diagnostic Imaging'],
    availableService: [
      {
        '@type': 'MedicalTest',
        name: 'MRI Scanning',
      },
      {
        '@type': 'MedicalTest',
        name: 'CT Scanning',
      },
      {
        '@type': 'MedicalTest',
        name: 'X-Ray Services',
      },
    ],
  }

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} h-full pt-[42px] lg:pt-[46px]`}>
        {children}
      </body>
    </html>
  );
}
