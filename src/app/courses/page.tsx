import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Courses',
  description:
    'Explore professional culinary training programs at Classic Catering Uganda - from cake baking to chef certifications.',
};

const categoryInfo = {
  professional: {
    title: 'Professional Programs',
    description: 'Comprehensive certifications for those seeking a career in the culinary industry.',
    icon: 'academic-cap',
  },
  training: {
    title: 'Short Courses',
    description: 'Intensive programs perfect for beginners and home bakers looking to improve their skills.',
    icon: 'clock',
  },
  business: {
    title: 'Business & Entrepreneurship',
    description: 'Programs designed to help you launch and grow your culinary business.',
    icon: 'briefcase',
  },
};

export default function CoursesPage() {
  const professionalCourses = courses.filter((c) => c.category === 'professional');
  const trainingCourses = courses.filter((c) => c.category === 'training');
  const businessCourses = courses.filter((c) => c.category === 'business');

  return (
    <>
      <PageHeader
        title="Our Courses"
        description="Professional culinary training programs for every skill level"
        backgroundImage="/images/PHOTO-2025-09-25-02-50-19.jpg"
      />

      {/* Overview */}
      <section className="py-16 bg-cream pattern-overlay corner-rings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(categoryInfo).map(([key, info]) => (
              <div key={key} className="premium-card flex items-start gap-4 p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-700/20">
                  <CategoryIcon icon={info.icon} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                  <p className="text-slate-600 text-sm">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Programs */}
      <section className="py-20 bg-white rings-top-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="section-divider mb-12">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Career Training"
            title="Professional Programs"
            description="Comprehensive training programs that prepare you for a successful career in the culinary industry."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="py-20 bg-cream-dark pattern-overlay rings-bottom-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Quick Learning"
            title="Short Courses"
            description="Intensive programs perfect for beginners, hobbyists, and those looking to develop specific skills."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {trainingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Entrepreneurship"
            title="Business Programs"
            description="Learn the business side of the culinary industry and turn your passion into a profitable venture."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-20 bg-cream pattern-overlay corner-rings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Divider */}
          <div className="section-divider mb-12">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Our Advantage"
            title="Why Train With Classic Catering"
            description="Discover what makes our training programs stand out from the rest."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Hands-On Learning',
                description: '80% practical training in our professional kitchens',
                icon: 'hand',
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from experienced chefs and industry professionals',
                icon: 'users',
              },
              {
                title: 'Modern Equipment',
                description: 'Train with the latest culinary tools and equipment',
                icon: 'beaker',
              },
              {
                title: 'Career Support',
                description: 'Job placement assistance and business mentorship',
                icon: 'briefcase',
              },
            ].map((feature, index) => (
              <div key={index} className="premium-card text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Info */}
      <section className="py-16 trust-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Upcoming Intake
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                February 2026 Enrollment Now Open
              </h3>
              <p className="text-white/80">
                Limited seats available. Secure your spot in our next cohort today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="secondary" size="md">
                Apply Now
              </Button>
              <Button href="tel:+256701774874" variant="ghost" size="md" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our training programs."
          />
          <div className="space-y-4">
            {[
              {
                question: 'What are the entry requirements?',
                answer: 'Our programs are open to anyone with a passion for culinary arts. No prior experience is required for most courses. You must be at least 16 years old.',
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes, we offer flexible payment plans for all our professional programs. You can pay in 2-3 installments spread across the course duration.',
              },
              {
                question: 'Will I receive a certificate?',
                answer: 'Yes, all graduates receive a certificate upon successful completion of their program. Our certificates are recognized by employers across Uganda and the region.',
              },
              {
                question: 'Do you provide job placement assistance?',
                answer: 'Absolutely! We have partnerships with hotels, restaurants, and catering companies. Our career services team helps graduates with job placements and interview preparation.',
              },
              {
                question: 'Can I visit the facility before enrolling?',
                answer: 'Yes, we welcome prospective students to tour our facilities. Contact us to schedule a visit and meet our instructors.',
              },
            ].map((faq, index) => (
              <details key={index} className="group premium-card overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-cream transition-colors">
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-open:bg-red-600 transition-colors">
                    <svg className="w-5 h-5 text-red-600 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 bg-cream">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Your Culinary Journey Today
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join hundreds of successful graduates who transformed their passion into a career.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Enroll Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
}

function CategoryIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    'academic-cap': (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[icon] || icons['academic-cap'];
}

function FeatureIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    hand: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    beaker: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[icon] || icons['hand'];
}
