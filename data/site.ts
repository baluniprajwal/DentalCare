export const siteConfig = {
  name: 'Prateek Dental Care',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Prateek Dental Care offers modern dental treatments, implants, orthodontics, and preventive care in Wakad, Pune.',
  telephone: ['+91 70283 32893', '+91 72298 32893'],
  email: 'info@prateekdental.com',
  address: {
    streetAddress: 'Shop 205, Pink City Commercial',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: ['Wakad', 'Pune'],
  geo: {
    latitude: 18.6020818,
    longitude: 73.7703083,
  },
  openingHours: [
    { dayOfWeek: 'Monday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Monday', opens: '17:00', closes: '21:00' },
    { dayOfWeek: 'Tuesday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Tuesday', opens: '17:00', closes: '21:00' },
    { dayOfWeek: 'Wednesday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Wednesday', opens: '17:00', closes: '21:00' },
    { dayOfWeek: 'Thursday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Thursday', opens: '17:00', closes: '21:00' },
    { dayOfWeek: 'Friday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Friday', opens: '17:00', closes: '21:00' },
    { dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Saturday', opens: '17:00', closes: '21:00' },
    { dayOfWeek: 'Sunday', opens: '10:00', closes: '14:00' },
    { dayOfWeek: 'Sunday', opens: '17:00', closes: '21:00' },
  ],
};

export const toAbsoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${siteConfig.siteUrl.replace(/\/$/, '')}${path}`;
