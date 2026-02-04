import { Service, Course, Testimonial, ContactInfo, NavItem, HeroSlide } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Corporate Catering', href: '/services#corporate' },
  { label: 'Events', href: '/services#events' },
  { label: 'Training', href: '/courses' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: '/images/PHOTO-2025-09-25-02-50-18.jpg',
    title: 'Corporate Catering That Reflects Your Brand',
    subtitle: 'Professional, ISO-certified catering for offices, conferences, and corporate events across Uganda.',
  },
  {
    id: '2',
    image: '/images/gallery-15.jpeg',
    title: 'Executive Dining Excellence',
    subtitle: 'From daily office meals to executive boardroom lunches and large-scale conferences.',
  },
  {
    id: '3',
    image: '/images/gallery-12.jpeg',
    title: 'Wedding & Events Catering',
    subtitle: 'Create unforgettable memories with our premium catering for weddings and special occasions.',
  },
  {
    id: '4',
    image: '/images/PHOTO-2025-09-25-02-40-28.jpg',
    title: 'Professional Culinary Training',
    subtitle: 'Our chefs don\'t just cook—we train the next generation of culinary professionals.',
  },
];

export const services: Service[] = [
  {
    id: 'corporate-catering',
    title: 'Corporate Catering',
    description: 'Executive lunches, conferences, gala dinners, and daily office lunch programs tailored to your needs.',
    icon: 'briefcase',
    image: '/images/gallery-15.jpeg',
  },
  {
    id: 'wedding-catering',
    title: 'Wedding & Events Catering',
    description: 'Create unforgettable memories with our premium wedding and traditional function catering services.',
    icon: 'heart',
    image: '/images/gallery-12.jpeg',
  },
  {
    id: 'culinary-training',
    title: 'Culinary & Hospitality Training',
    description: 'Comprehensive professional training programs in cake baking, local & international cuisine, pastry, and confectionery.',
    icon: 'graduation-cap',
    image: '/images/PHOTO-2025-09-25-02-40-28.jpg',
  },
  {
    id: 'restaurant-consulting',
    title: 'Restaurant Consulting',
    description: 'Menu development, kitchen operations, staff training, and quality control systems for your restaurant.',
    icon: 'chart-line',
    image: '/images/PHOTO-2025-09-25-02-50-19.jpg',
  },
];

export const trainingServices: Service[] = [
  {
    id: 'cake-baking',
    title: 'Cake Baking & Decoration',
    description: 'Master the art of creating beautiful and delicious cakes for all occasions.',
    icon: 'cake',
  },
  {
    id: 'local-cuisine',
    title: 'Local & International Cuisine',
    description: 'Learn to prepare diverse dishes from Uganda and around the world.',
    icon: 'utensils',
  },
  {
    id: 'pastry',
    title: 'Pastry & Confectionery',
    description: 'Create professional-quality pastries, breads, and sweet treats.',
    icon: 'cookie',
  },
  {
    id: 'mentorship',
    title: 'Business Startup Mentorship',
    description: 'Short-term programs to help you launch your own culinary business.',
    icon: 'rocket',
  },
];

export const cateringServices: Service[] = [
  {
    id: 'weddings',
    title: 'Weddings & Traditional Functions',
    description: 'Elegant catering for your most special celebrations.',
    icon: 'rings-wedding',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional catering for business meetings, conferences, and galas.',
    icon: 'building',
  },
  {
    id: 'parties',
    title: 'Private Parties',
    description: 'Customized menus for birthdays, graduations, and private gatherings.',
    icon: 'party-horn',
  },
];

export const courses: Course[] = [
  {
    id: 'professional-baking',
    title: 'Professional Cake Baking & Decoration',
    description: 'Comprehensive training in cake baking, decorating techniques, and business skills.',
    duration: '3 Months',
    price: 'UGX 1,500,000',
    features: [
      'Fondant & buttercream techniques',
      'Wedding cake design',
      'Business management basics',
      'Certification upon completion',
    ],
    category: 'professional',
  },
  {
    id: 'culinary-arts',
    title: 'Culinary Arts Diploma',
    description: 'Full professional chef training covering local and international cuisines.',
    duration: '6 Months',
    price: 'UGX 3,000,000',
    features: [
      'Local & international cuisine',
      'Kitchen management',
      'Food safety & hygiene',
      'Industry internship',
    ],
    category: 'professional',
  },
  {
    id: 'pastry-certificate',
    title: 'Pastry & Confectionery Certificate',
    description: 'Specialized training in pastry arts, bread making, and confectionery.',
    duration: '2 Months',
    price: 'UGX 1,200,000',
    features: [
      'Bread & pastry production',
      'Chocolate work',
      'Sugar crafting',
      'Product costing',
    ],
    category: 'professional',
  },
  {
    id: 'short-course-baking',
    title: 'Short Course: Home Baking',
    description: 'Perfect for beginners and home bakers looking to improve their skills.',
    duration: '2 Weeks',
    price: 'UGX 350,000',
    features: [
      'Basic baking techniques',
      'Popular cake recipes',
      'Simple decorations',
      'Equipment guidance',
    ],
    category: 'training',
  },
  {
    id: 'business-startup',
    title: 'Culinary Business Startup',
    description: 'Launch your food business with practical training and mentorship.',
    duration: '1 Month',
    price: 'UGX 800,000',
    features: [
      'Business planning',
      'Menu development',
      'Costing & pricing',
      'Marketing strategies',
    ],
    category: 'business',
  },
  {
    id: 'kids-baking',
    title: 'Kids Baking Camp',
    description: 'Fun and educational baking classes for children during holidays.',
    duration: '1 Week',
    price: 'UGX 200,000',
    features: [
      'Age-appropriate recipes',
      'Kitchen safety',
      'Creative decorating',
      'Take-home treats',
    ],
    category: 'training',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Namukasa',
    role: 'Professional Baker',
    content: 'Classic Catering transformed my hobby into a thriving business. The professional training and mentorship I received were invaluable. I now run my own successful bakery!',
  },
  {
    id: '2',
    name: 'John Okello',
    role: 'Restaurant Owner',
    content: 'Their corporate catering services are exceptional. From conferences to executive dinners, they consistently deliver quality food and professional service.',
  },
  {
    id: '3',
    name: 'Grace Atim',
    role: 'Culinary Graduate',
    content: 'The culinary arts diploma program gave me the skills and confidence to pursue my dream career. The instructors are experienced and truly dedicated.',
  },
];

export const contactInfo: ContactInfo = {
  address: 'Kisaasi, Kampala, Uganda',
  phones: ['+256 701 774874', '+256 777 828824'],
  emails: ['info@classiccateringuganda.com', 'classiccateringug@gmail.com'],
  whatsapp: '+256701774874',
};

export const features = [
  {
    title: 'Experienced & Professional Chefs',
    description: 'Industry veterans with years of excellence',
    icon: 'users',
  },
  {
    title: 'ISO 9001:2015 Certified',
    description: 'International quality standards guaranteed',
    icon: 'award',
  },
  {
    title: 'Timely & Flexible Delivery',
    description: 'On-schedule service, every time',
    icon: 'clock',
  },
  {
    title: 'Modern State-of-the-Art Kitchen',
    description: 'Premium equipment and facilities',
    icon: 'building-2',
  },
  {
    title: 'Professional Service & Mentorship',
    description: 'Dedicated support for every client',
    icon: 'hand',
  },
  {
    title: 'Local & International Cuisine',
    description: 'Diverse flavors to suit any palate',
    icon: 'utensils',
  },
];

// Service Pillars for Homepage
export const servicePillars = [
  {
    id: 'corporate-catering',
    title: 'Corporate Catering',
    description: 'Daily office meals, conferences, executive dining & galas',
    icon: 'briefcase',
    href: '/services#corporate',
    items: ['Daily Office Meals', 'Conferences & Galas', 'Executive & VIP Catering'],
  },
  {
    id: 'events-catering',
    title: 'Events Catering',
    description: 'Weddings, traditional functions & private celebrations',
    icon: 'heart',
    href: '/services#events',
    items: ['Weddings', 'Traditional Functions', 'Private Parties'],
  },
  {
    id: 'training-careers',
    title: 'Training & Careers',
    description: 'Professional culinary training and job placement',
    icon: 'graduation-cap',
    href: '/courses',
    items: ['Culinary Training', 'Hospitality Courses', 'Job Placement'],
  },
  {
    id: 'business-consulting',
    title: 'Business & Consulting',
    description: 'Restaurant setup, menu development & mentorship',
    icon: 'chart-line',
    href: '/services#consulting',
    items: ['Restaurant Consulting', 'Menu Development', 'Business Mentorship'],
  },
];
