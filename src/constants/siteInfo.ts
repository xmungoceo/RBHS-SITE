export const CLINIC_INFO = {
  name: 'Riverbend Imaging',
  address: {
    street: '456 Allegheny River Boulevard',
    city: 'Oakmont',
    state: 'PA',
    zip: '15139',
  },
  contact: {
    phone: '(724) 555-0123',
    fax: '(724) 555-0124',
    email: 'info@riverbendimaging.com',
    emergency: '(724) 555-0125',
  },
  hours: {
    monday: '7:00 AM - 7:00 PM',
    tuesday: '7:00 AM - 7:00 PM',
    wednesday: '7:00 AM - 7:00 PM',
    thursday: '7:00 AM - 7:00 PM',
    friday: '7:00 AM - 5:00 PM',
    saturday: '8:00 AM - 1:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://facebook.com/riverbendimaging',
    twitter: 'https://twitter.com/riverbendimaging',
    linkedin: 'https://linkedin.com/company/riverbendimaging',
  },
}

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Director & Lead Radiologist',
    credentials: 'MD, FACR',
    image: '/images/team/sarah-mitchell.jpg',
    specialties: ['Neuroradiology', 'Musculoskeletal Imaging'],
    bio: 'Dr. Mitchell brings over 15 years of experience in diagnostic imaging and leads our team with expertise in advanced neurological and musculoskeletal imaging techniques.',
  },
  {
    name: 'Dr. James Cook',
    role: 'Chief of Nuclear Medicine',
    credentials: 'MD, PhD',
    image: '/images/team/james-cook.jpg',
    specialties: ['Nuclear Medicine', 'PET/CT Imaging'],
    bio: 'With a background in both medicine and medical physics, Dr. Cook specializes in nuclear medicine and advanced molecular imaging techniques.',
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Lead Breast Imaging Specialist',
    credentials: 'MD',
    image: '/images/team/maria-rodriguez.jpg',
    specialties: ['Breast Imaging', 'Women\'s Imaging'],
    bio: 'Dr. Rodriguez is dedicated to women\'s health and specializes in comprehensive breast imaging services, including 3D mammography and breast MRI.',
  },
]

export const SERVICES = {
  mri: {
    name: 'MRI',
    description: 'High-resolution magnetic resonance imaging for detailed views of organs, tissues, and skeletal system.',
    longDescription: 'Our state-of-the-art MRI facility features the latest 3T technology, providing exceptional image quality with reduced scan times. We offer both traditional and open MRI options for patient comfort.',
    preparations: [
      'Remove all metal objects',
      'Inform staff of any medical implants',
      'Wear comfortable clothing',
      'Arrive 15 minutes early',
    ],
    duration: '30-60 minutes',
    insurance: ['Most major insurance plans accepted', 'Prior authorization may be required'],
  },
  ct: {
    name: 'CT Scan',
    description: 'Advanced computed tomography scans providing detailed cross-sectional images of your body.',
    longDescription: 'Our low-dose CT technology provides detailed 3D images while minimizing radiation exposure. Perfect for examining bones, soft tissues, and blood vessels.',
    preparations: [
      'Fast for 4 hours before scan',
      'Wear comfortable clothing',
      'Remove metal objects',
      'Inform staff of any allergies',
    ],
    duration: '15-30 minutes',
    insurance: ['Most major insurance plans accepted', 'Prior authorization may be required'],
  },
  xray: {
    name: 'X-Ray',
    description: 'Digital X-ray imaging for quick and accurate diagnosis of bone and chest conditions.',
    longDescription: 'Our digital X-ray system provides immediate, high-quality images while using the lowest possible radiation dose. Ideal for examining bones, chest, and abdomen.',
    preparations: [
      'Wear comfortable clothing',
      'Remove jewelry and metal objects',
      'Inform staff if pregnant',
    ],
    duration: '5-15 minutes',
    insurance: ['Most major insurance plans accepted', 'Walk-ins welcome for most X-rays'],
  },
} 