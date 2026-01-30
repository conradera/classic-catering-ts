import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { trainingServices, cateringServices } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our professional culinary training programs, premium catering services, and restaurant consulting at Classic Catering Uganda.',
};

const consultingServices = [
  {
    title: 'Menu Development',
    description: 'Create innovative, profitable menus tailored to your target market and cuisine style.',
    icon: 'clipboard-list',
  },
  {
    title: 'Kitchen Operations',
    description: 'Optimize your kitchen workflow, equipment, and processes for maximum efficiency.',
    icon: 'cog',
  },
  {
    title: 'Staff Training',
    description: 'Comprehensive training programs for your kitchen and service staff.',
    icon: 'users',
  },
  {
    title: 'Quality Control',
    description: 'Implement food safety standards and quality management systems.',
    icon: 'check-circle',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive culinary solutions for training, events, and business success"
        backgroundImage="/images/PHOTO-2025-09-25-02-39-51.jpg"
      />

      {/* Training Services */}
      <section id="training" className="py-20 bg-cream pattern-overlay corner-rings scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Training Programs"
            title="Culinary & Hospitality Training"
            description="Transform your passion into a profession with our comprehensive training programs designed by industry experts."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>
          <div className="mt-12 premium-card p-8 bg-gradient-to-r from-red-50 to-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="premium-badge inline-flex mb-3">
                  <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Start Learning
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Start Your Culinary Journey?</h3>
                <p className="text-slate-600">Explore our courses and find the perfect program for you.</p>
              </div>
              <Button href="/courses" variant="primary" size="md">
                View All Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Services */}
      <section id="catering" className="py-20 bg-white rings-top-right scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="section-divider mb-12">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Event Catering"
            title="Professional Catering Services"
            description="From intimate gatherings to grand celebrations, we deliver exceptional culinary experiences tailored to your event."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {cateringServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>

          {/* Catering Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="premium-card p-8">
              <div className="premium-badge inline-flex mb-4">
                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Premium Service
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'Customized menus for any dietary requirements',
                  'Full-service setup, staffing, and cleanup',
                  'Premium quality ingredients sourced locally',
                  'Professional presentation and garnishing',
                  'Flexible packages for any budget',
                  'Complimentary tasting sessions for large events',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="premium-card p-8">
              <div className="premium-badge inline-flex mb-4">
                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                Event Types
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Events We Cater</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Weddings',
                  'Corporate Events',
                  'Birthday Parties',
                  'Graduations',
                  'Conferences',
                  'Gala Dinners',
                  'Private Parties',
                  'Religious Functions',
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-cream rounded-lg border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-all"
                  >
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Consulting */}
      <section id="consulting" className="py-20 bg-cream-dark pattern-overlay rings-bottom-left scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Business Solutions"
            title="Restaurant Consulting"
            description="Expert guidance to help your food business thrive in a competitive market."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((service, index) => (
              <div key={index} className="premium-card p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-4 shadow-lg shadow-red-700/20">
                  <ConsultingIcon icon={service.icon} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Consulting Process */}
          <div className="mt-16">
            <div className="section-divider mb-8">
              <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">Our Consulting Process</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Assessment', description: 'We analyze your current operations and identify opportunities' },
                { step: '02', title: 'Strategy', description: 'Develop a customized plan aligned with your goals' },
                { step: '03', title: 'Implementation', description: 'Execute the plan with hands-on support' },
                { step: '04', title: 'Follow-up', description: 'Monitor progress and optimize for continued success' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="premium-card p-6 h-full">
                    <span className="text-4xl font-bold bg-gradient-to-br from-red-200 to-red-300 bg-clip-text text-transparent">{item.step}</span>
                    <h4 className="text-lg font-semibold text-slate-800 mt-2 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Whether you need training, catering, or consulting services, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us Today
            </Button>
            <Button href="tel:+256701774874" variant="outline" size="lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultingIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    'clipboard-list': (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    cog: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    users: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    'check-circle': (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  return icons[icon] || icons['check-circle'];
}
