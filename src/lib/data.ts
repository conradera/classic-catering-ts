import { Service, Course, Testimonial, ContactInfo, NavItem, HeroSlide } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Courses', href: '/courses' },
  { label: 'Contact', href: '/contact' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: '/images/PHOTO-2025-09-25-02-50-19.jpg',
    title: 'Welcome to Classic Baking & Catering Uganda',
    subtitle: 'Whether it\'s a wedding, corporate event, or private gathering, trust us to deliver a blend of local and international flavors that your guests will love.',
  },
  {
    id: '2',
    image: '/images/PHOTO-2025-09-25-02-40-28.jpg',
    title: 'Professional Culinary Training',
    subtitle: 'Transform your passion for cooking into a professional career',
  },
  {
    id: '3',
    image: '/images/PHOTO-2025-09-25-02-39-51.jpg',
    title: 'Premium Catering Services',
    subtitle: 'Exceptional food experiences for every occasion',
  },
  {
    id: '4',
    image: '/images/PHOTO-2025-09-25-02-50-18.jpg',
    title: 'ISO 9001:2015 Certified',
    subtitle: 'Quality and excellence in everything we do',
  },
];

export const services: Service[] = [
  {
    id: 'culinary-training',
    title: 'Culinary & Hospitality Training',
    description: 'Comprehensive professional training programs in cake baking, local & international cuisine, pastry, and confectionery.',
    icon: 'graduation-cap',
    image: '/images/PHOTO-2025-09-25-02-40-28.jpg',
  },
  {
    id: 'wedding-catering',
    title: 'Wedding & Events Catering',
    description: 'Create unforgettable memories with our premium wedding and traditional function catering services.',
    icon: 'heart',
    image: '/images/PHOTO-2025-09-25-02-39-51.jpg',
  },
  {
    id: 'corporate-catering',
    title: 'Corporate Catering',
    description: 'Executive lunches, conferences, gala dinners, and daily office lunch programs tailored to your needs.',
    icon: 'briefcase',
    image: '/images/PHOTO-2025-09-25-02-50-18.jpg',
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
    title: 'ISO 9001:2015 Certified',
    description: 'Internationally recognized quality management standards',
    icon: 'award',
  },
  {
    title: 'Experienced Instructors',
    description: 'Learn from industry professionals with years of experience',
    icon: 'users',
  },
  {
    title: 'Hands-On Training',
    description: 'Practical, kitchen-based learning for real-world skills',
    icon: 'hand',
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art training kitchens and equipment',
    icon: 'building-2',
  },
  {
    title: 'Career Support',
    description: 'Job placement assistance and business mentorship',
    icon: 'trending-up',
  },
  {
    title: 'Flexible Schedules',
    description: 'Weekend and evening classes available',
    icon: 'calendar',
  },
];
