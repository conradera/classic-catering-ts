import { Service, Course, Testimonial, ContactInfo, NavItem, HeroSlide } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Corporate Catering', href: '/services#corporate' },
  { label: 'Training', href: '/courses' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: '/images/cake5c.jpg',
    title: 'Corporate & Executive Catering in Uganda',
    subtitle: 'Premium catering for corporate events, executive meetings, trainings, and high-end functions.',
  },
  {
    id: '2',
    image: '/images/cla189.jpg',
    title: 'Boardroom to Banquet Hall',
    subtitle: 'Daily office meals, conference catering, and gala dinners — delivered on time, every time.',
  },
  {
    id: '3',
    image: '/images/gallery-12.jpeg',
    title: 'Unforgettable Event Catering',
    subtitle: 'Weddings, anniversaries, and celebrations crafted with precision and premium ingredients.',
  },
  {
    id: '4',
    image: '/images/PHOTO-2025-09-25-02-40-28.jpg',
    title: 'Professional Culinary Training',
    subtitle: 'Accredited programs that launch careers — 500+ graduates and counting.',
  },
];

export const services: Service[] = [
  {
    id: 'corporate-catering',
    title: 'Corporate Catering',
    description: 'Professional food service for meetings, conferences, and office events.',
    icon: 'briefcase',
    image: '/images/cla47jpgc.jpg',
    badge: 'Most Requested',
    featured: true,
  },
  {
    id: 'events-catering',
    title: 'Events Catering',
    description: 'Weddings, birthdays, anniversaries, and cultural celebrations done right.',
    icon: 'heart',
    image: '/images/events-outdoor.jpeg',
    badge: 'Corporate Favorite',
    featured: true,
  },
  {
    id: 'cakes-confectionery',
    title: 'Cakes & Confectionery',
    description: 'Custom cakes, artisan chocolates, and dessert tables for every occasion.',
    icon: 'cake',
    image: '/images/cla93c.jpg',
    featured: true,
  },
  {
    id: 'juices-salads',
    title: 'Juices, Salads & Wellness',
    description: 'Fresh juices, detox cleanses, and gourmet salads for health-conscious events.',
    icon: 'leaf',
    image: '/images/juices-display.jpeg',
  },
  {
    id: 'local-international-cuisine',
    title: 'Local & International Cuisine',
    description: 'Authentic Ugandan flavors and global classics under one roof.',
    icon: 'globe',
    image: '/images/gallery-5.jpeg',
  },
  {
    id: 'culinary-training',
    title: 'Culinary & Hospitality Training',
    description: 'Accredited programs from short courses to full diplomas.',
    icon: 'graduation-cap',
    image: '/images/PHOTO-2025-09-25-02-40-28.jpg',
  },
  {
    id: 'restaurant-consulting',
    title: 'Restaurant & Kitchen Consulting',
    description: 'Expert guidance on menu development, kitchen setup, and operations.',
    icon: 'chart-line',
    image: '/images/PHOTO-2025-09-25-02-50-19.jpg',
  },
  {
    id: 'business-mentorship',
    title: 'Business Start-Up & Mentorship',
    description: 'Go from passion to profit with hands-on business mentorship.',
    icon: 'rocket',
    image: '/images/PHOTO-2025-09-25-02-50-18.jpg',
  },
  {
    id: 'job-placement',
    title: 'Job Placement & Career Support',
    description: 'Connecting graduates to top employers in Uganda\'s culinary sector.',
    icon: 'users',
    image: '/images/PHOTO-2025-09-25-02-39-51.jpg',
  },
];

// Full service descriptions for the services page
export const serviceDescriptions: Record<string, string> = {
  'corporate-catering': 'Elevate your workplace culture and impress your clients with our dedicated corporate catering service. We provide more than just meals; we deliver timely and flexible culinary experiences designed for the professional environment. From executive boardroom lunches and daily staff meal programs to large-scale conference catering and gala dinners, our menus are crafted to energize and inspire. Our experienced and professional chefs create a diverse range of local & international cuisine, ensuring dietary preferences and corporate branding are seamlessly integrated. Operating from our modern, state-of-the-art kitchen, we guarantee the highest standards of food safety and presentation, a commitment underscored by our ISO certification. Trust us to handle the details with professional services, so you can focus on business.',
  'events-catering': 'Create unforgettable moments for weddings, birthdays, anniversaries, and cultural celebrations with our full-service events catering. We transform your vision into a flavorful reality, managing every detail from custom menu design to seamless on-site execution. Our creative team of experienced and professional chefs specializes in both lavish spreads and intimate dining experiences. The precision of our modern, state-of-the-art kitchen allows for impeccable preparation, whether for 50 or 500 guests. Our ISO certification is your assurance of consistent quality and rigorous hygiene standards. We pride ourselves on professional services and timely, flexible coordination with your event planner, ensuring the food is a highlight remembered for all the right reasons.',
  'cakes-confectionery': 'Celebrate life\'s sweetest milestones with edible artistry from our dedicated patisserie studio. We specialize in custom-designed cakes for all occasions\u2014from elegant wedding tiers and sculpted novelty cakes to bespoke cupcakes and dessert tables. Beyond cakes, our experienced and professional pastry chefs craft a world of confectionery, including artisan chocolates, macarons, and traditional sweets. Every creation is produced in our modern, state-of-the-art kitchen, which is specifically equipped for precision baking and delicate decoration. This controlled environment, governed by our ISO-certified processes, ensures not only stunning visuals but also exceptional taste and freshness. We provide professional services from consultation to timely and flexible delivery, making your vision deliciously real.',
  'juices-salads': 'Nourish your body and delight your senses with our vibrant selection of fresh juices, detoxifying cleanses, and gourmet salads. We focus on purity, flavor, and nutritional balance, using the freshest local produce to create invigorating blends and crisp, creative salads. This service reflects our commitment to holistic culinary excellence, executed by our experienced and professional team who understand the art of flavor pairing and nutritional science. Prepared daily in our hygienic, modern state-of-the-art kitchen, our wellness offerings meet the same ISO-certified standards as all our menus. Ideal for corporate wellness programs, health-focused events, or a refreshing addition to any catering spread, we offer timely and flexible delivery of vitality in a bottle or bowl.',
  'local-international-cuisine': 'Embark on a global culinary journey without leaving Uganda. We masterfully bridge the rich, authentic flavors of Ugandan tradition with beloved classics and contemporary dishes from around the world. Our menus are a testament to the skill of our experienced and professional chefs, who are adept in diverse culinary techniques and traditions. From a hearty Luwombo or Rolex to a perfect Beef Wellington or authentic Indian Biryani, each dish is prepared with respect for its origin. This versatility is supported by our modern, state-of-the-art kitchen, designed to handle varied cuisines efficiently while maintaining our ISO-certified commitment to quality. This service forms the delicious core of our catering and training programs.',
  'culinary-training': 'Launch or accelerate your career in the vibrant food industry with our accredited training services. We offer structured pathways from short courses in Baking, Pastry, and Cake Decoration to comprehensive professional courses like Diploma and Certificate programs in Culinary Arts. Specialized modules, including Coffee Barista training (Basic, Advanced, Master) and Cooking for both local & international cuisine, provide targeted skills. Learn directly from our experienced and professional chefs in a practical, hands-on environment within our modern, state-of-the-art kitchen. Our ISO certification validates a world-class curriculum, while our professional services extend beyond the classroom through business start-up mentorship and job placement support, ensuring your success is our ultimate goal.',
  'restaurant-consulting': 'Turn your culinary concept into a thriving, efficient operation. Our consulting service provides expert guidance on menu development, kitchen workflow design, cost control, staff training, and quality assurance systems. We leverage the deep, practical industry knowledge of our experienced and professional chefs and managers to diagnose challenges and implement effective solutions. Our advice is grounded in the real-world efficiency of our own modern, state-of-the-art kitchen and the systematic excellence demanded by our ISO certification. We deliver professional services tailored to your unique brand, helping you establish a foundation for consistency, profitability, and growth, whether you\'re a new start-up or an established venue.',
  'business-mentorship': 'Move confidently from passion to profit with our specialized mentorship program for aspiring food entrepreneurs. Beyond training services, we offer ongoing, practical guidance on business planning, legal requirements, branding, financial management, and marketing strategies for bakeries, cafes, catering companies, and restaurants. This one-on-one support is led by seasoned professionals who have navigated the market themselves. This professional service is an extension of our commitment to building the industry. We equip you with not just recipes, but a viable business model and a trusted advisor, helping you mitigate risk and lay a strong foundation for sustainable success.',
  'job-placement': 'We invest in your long-term success. Our dedicated career support bridges the gap between graduation and employment within Uganda\'s growing culinary and hospitality sector. Leveraging our extensive industry network and reputation for professional services, we connect our top graduates with opportunities in leading hotels, restaurants, catering companies, and cafes. This service demonstrates our commitment to being a true partner in your career journey, adding immense value to our training services. For employers, we act as a trusted talent pipeline, recommending candidates who are not only skilled but also trained in the ISO-certified, professional standards synonymous with Classic Baking & Catering Uganda.',
};

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
    role: 'HR Manager',
    company: 'Stanbic Bank Uganda',
    content: 'Classic Catering handles our weekly executive lunches and quarterly conferences. The food quality is consistent, service is always on time, and their team is genuinely professional.',
  },
  {
    id: '2',
    name: 'John Okello',
    role: 'Admin Officer',
    company: 'UNDP Kampala',
    content: 'We\'ve used their corporate catering for over two years. From boardroom lunches to 300-person conferences, they consistently deliver quality food and seamless service.',
  },
  {
    id: '3',
    name: 'Grace Atim',
    role: 'Event Planner',
    company: 'Kampala Serena Hotel',
    content: 'Their attention to detail is unmatched. Every event we\'ve collaborated on has received outstanding feedback from guests. A truly reliable catering partner.',
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
    title: '10+ Years of Culinary Excellence',
    description: 'A seasoned team of professional chefs trained in both local and international cuisine, delivering consistent quality across every event.',
    icon: 'users',
    metric: '10+',
    metricLabel: 'Years Experience',
  },
  {
    title: 'ISO 45001:2018 Certified',
    description: 'Internationally certified occupational health & safety management — your guarantee of consistent, hygienic, and reliable service.',
    icon: 'award',
    metric: 'ISO',
    metricLabel: 'Certified',
  },
  {
    title: '98% On-Time Delivery',
    description: 'Precision logistics that adapts to your schedule. From last-minute changes to large-scale coordination, we deliver on time.',
    icon: 'clock',
    metric: '98%',
    metricLabel: 'On-Time',
  },
  {
    title: 'State-of-the-Art Kitchen',
    description: 'A modern, purpose-built facility enabling large-scale production, precision baking, and hands-on training — all under one roof.',
    icon: 'building-2',
    metric: '1',
    metricLabel: 'Modern Facility',
  },
  {
    title: '500+ Successful Events',
    description: 'From intimate boardroom lunches to 500-guest conferences and grand galas — a proven track record of flawless execution.',
    icon: 'hand',
    metric: '500+',
    metricLabel: 'Events Catered',
  },
];

// Service Pillars for Homepage
export const servicePillars = [
  {
    id: 'corporate-catering',
    title: 'Corporate Catering',
    description: 'Daily office meals, conferences, executive dining & galas',
    icon: 'briefcase',
    href: '/services#corporate-catering',
    items: ['Daily Staff Meals', 'Conferences & Galas', 'Executive Boardroom Lunches'],
  },
  {
    id: 'events-catering',
    title: 'Events Catering',
    description: 'Weddings, birthdays, anniversaries & cultural celebrations',
    icon: 'heart',
    href: '/services#events-catering',
    items: ['Weddings', 'Birthdays & Anniversaries', 'Cultural Celebrations'],
  },
  {
    id: 'cakes-confectionery',
    title: 'Cakes & Confectionery',
    description: 'Custom cakes, artisan chocolates & dessert tables',
    icon: 'cake',
    href: '/services#cakes-confectionery',
    items: ['Wedding & Novelty Cakes', 'Cupcakes & Dessert Tables', 'Artisan Chocolates & Macarons'],
  },
  {
    id: 'juices-salads',
    title: 'Juices, Salads & Wellness',
    description: 'Fresh juices, detox cleanses & gourmet salads',
    icon: 'leaf',
    href: '/services#juices-salads',
    items: ['Fresh Juices & Cleanses', 'Gourmet Salads', 'Corporate Wellness Programs'],
  },
  {
    id: 'local-international-cuisine',
    title: 'Local & International Cuisine',
    description: 'Authentic Ugandan flavors & global culinary classics',
    icon: 'globe',
    href: '/services#local-international-cuisine',
    items: ['Ugandan Traditional Dishes', 'International Classics', 'Fusion Menus'],
  },
  {
    id: 'culinary-training',
    title: 'Culinary & Hospitality Training',
    description: 'Professional courses, diplomas & certificates',
    icon: 'graduation-cap',
    href: '/services#culinary-training',
    items: ['Baking & Pastry Courses', 'Culinary Arts Diploma', 'Coffee Barista Training'],
  },
  {
    id: 'restaurant-consulting',
    title: 'Restaurant & Kitchen Consulting',
    description: 'Menu development, kitchen design & quality systems',
    icon: 'chart-line',
    href: '/services#restaurant-consulting',
    items: ['Menu Development', 'Kitchen Workflow Design', 'Quality Assurance Systems'],
  },
  {
    id: 'business-mentorship',
    title: 'Business Start-Up & Mentorship',
    description: 'Business planning, branding & financial guidance',
    icon: 'rocket',
    href: '/services#business-mentorship',
    items: ['Business Planning', 'Branding & Marketing', 'Financial Management'],
  },
  {
    id: 'job-placement',
    title: 'Job Placement & Career Support',
    description: 'Employment connections & career development',
    icon: 'users',
    href: '/services#job-placement',
    items: ['Industry Job Placement', 'Career Guidance', 'Employer Partnerships'],
  },
];
