import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Classic Baking & Catering Uganda - ISO 45001:2018 certified culinary training and premium catering services since 2017.',
};

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from training to catering.',
    icon: 'star',
  },
  {
    title: 'Innovation',
    description: 'We combine traditional techniques with modern culinary trends.',
    icon: 'lightbulb',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and professional ethics.',
    icon: 'shield',
  },
  {
    title: 'Customer Focus',
    description: 'Our clients satisfaction is at the heart of everything we do.',
    icon: 'heart',
  },
];

const milestones = [
  { year: '2017', title: 'Founded', description: 'Classic Baking & Catering Uganda established in Kampala' },
  { year: '2018', title: 'First Graduates', description: 'Celebrated our first batch of professional culinary graduates' },
  { year: '2020', title: 'Expansion', description: 'Expanded facilities and launched corporate catering services' },
  { year: '2024', title: 'ISO Certified', description: 'Achieved ISO 45001:2018 certification for occupational health & safety management' },
  { year: '2024', title: '500+ Graduates', description: 'Reached milestone of training over 500 culinary professionals' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Discover our journey of culinary excellence and commitment to quality"
        backgroundImage="/images/PHOTO-2025-09-25-02-40-28.jpg"
      />

      {/* Story Section */}
      <section className="py-20 bg-cream pattern-overlay corner-rings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="premium-badge mb-6">
                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                A Journey of Passion, Purpose, and{' '}
                <span className="text-red-800">Culinary Excellence</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Classic Baking & Catering Uganda was founded in 2017 with a vision to transform
                  the culinary landscape in Uganda. What started as a small training center has
                  grown into one of the leading culinary institutions in East Africa.
                </p>
                <p>
                  Rooted in the heritage of the Classic Culinary Institute, we combine
                  time-honored culinary traditions with modern techniques to prepare our students
                  for success in the dynamic food industry.
                </p>
                <p>
                  Our ISO 45001:2018 certification reflects our unwavering commitment to quality
                  in every aspect of our operations - from the ingredients we use to the training
                  we provide.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-800">500+</p>
                  <p className="text-slate-600 text-sm">Graduates Trained</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-800">1000+</p>
                  <p className="text-slate-600 text-sm">Events Catered</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-800">8+</p>
                  <p className="text-slate-600 text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="decorative-image">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/PHOTO-2025-09-25-02-50-18.jpg"
                    alt="Classic Catering Kitchen"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Award Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-red-700 to-red-900 text-white px-4 py-2 rounded-full shadow-lg z-20 hidden lg:flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">ISO Certified</span>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-red-700 rounded-2xl p-6 shadow-xl hidden lg:block">
                <Image
                  src="/images/certs.png"
                  alt="ISO 45001:2018 Certified"
                  width={150}
                  height={60}
                  className="brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white rings-top-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="section-divider mb-12">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="premium-card p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-6 shadow-lg shadow-red-700/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide world-class culinary education and exceptional catering services that
                empower individuals to achieve their professional goals while delivering memorable
                dining experiences to our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="premium-card p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-6 shadow-lg shadow-red-700/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the premier culinary institution in East Africa, recognized for producing
                skilled professionals who drive innovation and excellence in the food and
                hospitality industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-dark pattern-overlay rings-bottom-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core values guide everything we do, from training future chefs to catering memorable events."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="premium-card text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-700/20">
                  <ValueIcon icon={value.icon} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white corner-rings">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments in our journey of culinary excellence."
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-400 to-red-200 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg ring-4 ring-red-100" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="premium-card p-6">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-100 to-red-50 text-red-900 rounded-full text-sm font-semibold mb-2 border border-red-200">
                        {milestone.year}
                      </span>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">{milestone.title}</h4>
                      <p className="text-slate-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Culinary Family
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Start your journey with Classic Catering Uganda today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/courses" variant="primary" size="lg">
              View Our Courses
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    star: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    lightbulb: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    shield: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    heart: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };
  return icons[icon] || icons['star'];
}
