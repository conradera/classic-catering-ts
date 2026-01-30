export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  category: 'training' | 'professional' | 'business';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  emails: string[];
  whatsapp: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}
