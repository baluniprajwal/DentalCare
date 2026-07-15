export const siteConfig = {
  name: 'Prateek Dental Care',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Prateek Dental Care offers modern dental treatments, implants, orthodontics, and preventive care in Wakad, Pune.',
  telephone: ['+91 72298 32893', '+91 70283 32893'],
  email: 'info@prateekdental.com',
  address: {
    streetAddress: 'shop no 205, Kaspate Wasti Rd, near police lines, Vishnu Dev Nagar, Wakad',
    addressLocality: 'Pune, Pimpri-Chinchwad',
    addressRegion: 'Maharashtra',
    postalCode: '411057',
    addressCountry: 'IN',
  },
  areaServed: ['Wakad', 'Pune'],
  geo: {
    latitude: 18.6020818,
    longitude: 73.7703083,
  },
  openingHours: [
    { dayOfWeek: 'Monday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Tuesday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Wednesday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Thursday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Friday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Saturday', opens: '00:00', closes: '23:59' },
    { dayOfWeek: 'Sunday', opens: '00:00', closes: '23:59' },
  ],
  display: {
    phone: '72298 32893, 70283 32893',
    address:
      'shop no 205, Kaspate Wasti Rd, near police lines, Vishnu Dev Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057',
    hours: 'Open 24 hours',
  },
};

export const toAbsoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${siteConfig.siteUrl.replace(/\/$/, '')}${path}`;
