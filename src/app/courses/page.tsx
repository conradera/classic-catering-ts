import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Training & Courses - Classic Baking & Catering Uganda',
  description:
    'Professional culinary training programs — diplomas, certificates, short courses & barista training. Practical, industry-oriented programs for all skill levels.',
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Training & Courses"
        description="Practical, industry-oriented culinary training for home cooks, aspiring chefs, entrepreneurs, and career-focused professionals."
        backgroundImage="/images/PHOTO-2025-09-25-02-40-28.jpg"
      />

      {/* Overview — Who is this for */}
      <section className="py-16 bg-cream pattern-overlay corner-rings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="premium-badge mb-4">
              <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Our Training Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Learn From <span className="text-red-700">The Best</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Classic Baking & Catering Uganda offers a wide range of culinary training designed for different skill levels and career goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Baking & Pastry', icon: 'cake' },
              { title: 'Cookery & Catering', icon: 'utensils' },
              { title: 'Barista & Coffee', icon: 'coffee' },
              { title: 'Short Certificates', icon: 'clock' },
              { title: 'Professional Diplomas', icon: 'academic' },
            ].map((cat) => (
              <div key={cat.title} className="premium-card flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 shadow">
                  <TrainingCategoryIcon icon={cat.icon} />
                </div>
                <span className="font-semibold text-slate-800 text-sm">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diploma Program */}
      <section id="diploma" className="py-20 bg-white rings-top-right scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-divider mb-10">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Professional Certification"
            title="Diploma in Professional Cookery & Baking"
            description="A comprehensive 6-month program designed to equip students with professional culinary and baking skills for employment or entrepreneurship."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Key Details */}
            <div className="premium-card p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Program Details</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <DetailItem label="Duration" value="6 Months" />
                <DetailItem label="Certification" value="Diploma" />
                <DetailItem label="Study Mode" value="Weekday Classes" />
                <DetailItem label="Schedule" value="Morning / Afternoon / Evening" />
              </div>
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Tuition Fees</p>
                    <p className="text-3xl font-bold text-slate-800">UGX 1,500,000</p>
                    <p className="text-xs text-slate-500 mt-1">Installment plans available</p>
                  </div>
                  <Button href="/contact?course=diploma" variant="primary" size="md">
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="premium-card p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Course Modules</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Culinary Fundamentals',
                  'Food Preparation & Presentation',
                  'Baking & Pastry Production',
                  'Kitchen Operations & Safety',
                  'Menu Planning',
                  'Cost Control & Food Hygiene',
                  'Professional Kitchen Management',
                  'Introduction to Entrepreneurship',
                ].map((mod) => (
                  <div key={mod} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {mod}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Program */}
      <section id="certificate" className="py-20 bg-cream-dark pattern-overlay rings-bottom-left scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Professional Certification"
            title="Certificate in Professional Cookery & Baking"
            description="A shorter professional course ideal for beginners or those upgrading their skills — with flexible scheduling options."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="premium-card p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Program Details</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <DetailItem label="Duration" value="3 Months" />
                <DetailItem label="Certification" value="Certificate" />
                <DetailItem label="Study Mode" value="Flexible Schedules" />
                <DetailItem label="Schedule" value="Weekday / Weekend" />
              </div>
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Tuition Fees</p>
                    <p className="text-3xl font-bold text-slate-800">UGX 800,000</p>
                    <p className="text-xs text-slate-500 mt-1">Installment plans available</p>
                  </div>
                  <Button href="/contact?course=certificate" variant="primary" size="md">
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Course Modules</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Basic Cookery Skills',
                  'Baking Fundamentals',
                  'Cake Decoration Basics',
                  'Food Hygiene & Safety',
                  'Menu Planning',
                  'Introduction to Catering Services',
                ].map((mod) => (
                  <div key={mod} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {mod}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Certificate Courses */}
      <section id="short-courses" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-divider mb-10">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Quick Skill Acquisition"
            title="Short Certificate Courses"
            description="Short-term courses designed for fast skill acquisition and specialization — available as group weekend classes or flexible individual sessions."
          />

          {/* Group Weekend Classes */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Group Classes <span className="text-sm font-normal text-slate-500">(Weekend Schedule)</span></h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white text-sm">
                    <th className="px-6 py-4 text-left rounded-tl-xl font-semibold">Course</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Schedule</th>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Fees (UGX)</th>
                    <th className="px-6 py-4 text-right rounded-tr-xl font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { course: 'Cake Baking & Decoration', duration: '4 weeks', schedule: 'Saturday & Sunday', time: '9:00am - 3:00pm', fees: '500,000' },
                    { course: 'Cookery', duration: '4 weeks', schedule: 'Saturday & Sunday', time: '9:00am - 3:00pm', fees: '500,000' },
                    { course: 'Pastry Making', duration: '4 weeks', schedule: 'Saturday & Sunday', time: '9:00am - 3:00pm', fees: '500,000' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-red-50/50 transition-colors`}>
                      <td className="px-6 py-4 font-medium text-slate-800">{row.course}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.duration}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.schedule}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.time}</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">{row.fees}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href="/contact?course=short" className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors">
                          Enroll &rarr;
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Individual Flexible Classes */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Individual Classes <span className="text-sm font-normal text-slate-500">(Flexible Schedule)</span></h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white text-sm">
                    <th className="px-6 py-4 text-left rounded-tl-xl font-semibold">Course</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Study Mode</th>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Fees (UGX)</th>
                    <th className="px-6 py-4 text-right rounded-tr-xl font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { course: 'Cake Baking', duration: '2 weeks', mode: 'Flexible', time: 'Flexible', fees: '350,000' },
                    { course: 'Cake Baking & Wedding Decoration', duration: '4 weeks', mode: 'Flexible', time: 'Flexible', fees: '600,000' },
                    { course: 'Cookery & Catering', duration: '4 weeks', mode: 'Flexible', time: 'Flexible', fees: '600,000' },
                    { course: 'Pastry Making', duration: '2 weeks', mode: 'Flexible', time: 'Flexible', fees: '350,000' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-red-50/50 transition-colors`}>
                      <td className="px-6 py-4 font-medium text-slate-800">{row.course}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.duration}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.mode}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.time}</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">{row.fees}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href="/contact?course=short" className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors">
                          Enroll &rarr;
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Barista & Coffee Courses */}
      <section id="barista" className="py-20 bg-cream pattern-overlay corner-rings scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Barista Training"
            title="Barista & Coffee Courses"
            description="Professional coffee and barista training for cafe work or business startups."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Course Table */}
            <div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white text-sm">
                      <th className="px-6 py-4 text-left rounded-tl-xl font-semibold">Course</th>
                      <th className="px-6 py-4 text-left font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left font-semibold">Study Mode</th>
                      <th className="px-6 py-4 text-left font-semibold">Fees (UGX)</th>
                      <th className="px-6 py-4 text-right rounded-tr-xl font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: 'Basic Barista Skills', duration: '1 week', mode: 'Group or Individual', fees: '350,000' },
                      { course: 'Advanced Barista Skills', duration: '2 weeks', mode: 'Group or Individual', fees: '500,000' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-red-50/50 transition-colors`}>
                        <td className="px-6 py-4 font-medium text-slate-800">{row.course}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{row.duration}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{row.mode}</td>
                        <td className="px-6 py-4 font-semibold text-slate-800">{row.fees}</td>
                        <td className="px-6 py-4 text-right">
                          <Link href="/contact?course=barista" className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors">
                            Enroll &rarr;
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="premium-card p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">What You&apos;ll Learn</h3>
              <div className="space-y-3">
                {[
                  'Coffee preparation techniques',
                  'Espresso machine handling',
                  'Milk texturing & latte art',
                  'Customer service excellence',
                  'Cafe operations basics',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact?course=barista" variant="primary" size="md">
                  Enroll for Barista Training
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 bg-white rings-top-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-divider mb-10">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Our Advantage"
            title="Why Choose Our Culinary Training?"
            description="What sets Classic Baking & Catering Uganda apart from the rest."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Hands-on Learning', desc: 'Practical, kitchen-based training from day one', icon: 'hand' },
              { title: 'Expert Instructors', desc: 'Industry-experienced professional trainers', icon: 'users' },
              { title: 'Flexible Schedules', desc: 'Weekend and flexible class options available', icon: 'clock' },
              { title: 'Accredited Programs', desc: 'Recognized certification upon completion', icon: 'award' },
              { title: 'Job Readiness', desc: 'Skills aligned with real kitchen environments', icon: 'briefcase' },
            ].map((feature, index) => (
              <div key={index} className="premium-card text-center p-6 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h3>
                <p className="text-slate-600 text-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Intake Banner */}
      <section className="py-16 trust-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Upcoming Intake
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                February 2026 Enrollment Now Open
              </h3>
              <p className="text-white/80">
                Application Deadline: <strong>January 31st, 2026</strong> &mdash; Limited seats available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact?course=apply" variant="secondary" size="md">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <a
                href="https://wa.me/256777682834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Payment Info */}
      <section className="py-20 bg-cream-dark pattern-overlay">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Enrollment Info"
            title="Registration & Payment"
            description="Everything you need to know about enrolling in our programs."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Registration Fee */}
            <div className="premium-card p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">Registration Fee</h3>
              <p className="text-2xl font-bold text-red-700 mb-1">UGX 50,000</p>
              <p className="text-xs text-slate-500">Non-refundable</p>
            </div>

            {/* Payment Methods */}
            <div className="premium-card p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-3">Payment Methods</h3>
              <div className="space-y-1.5 text-sm text-slate-600">
                <p>Cash</p>
                <p>Mobile Money</p>
                <p>Bank Transfer</p>
              </div>
            </div>

            {/* Installment Plans */}
            <div className="premium-card p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-3">Installment Plans</h3>
              <p className="text-sm text-slate-600 mb-3">Flexible payment plans available for all professional programs.</p>
              <a
                href="https://wa.me/256777682834"
                className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors"
              >
                Contact for details &rarr;
              </a>
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
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-open:bg-red-600 transition-colors flex-shrink-0 ml-4">
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Your Culinary Journey <span className="text-yellow-400">Today</span>
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Join 500+ successful graduates who transformed their passion into a career.
          </p>
          <p className="text-slate-400 mb-10">
            Diploma &rarr; Certificate &rarr; Short Courses &mdash; choose the path that fits your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?course=apply" variant="primary" size="lg">
              Apply Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <a
              href="https://wa.me/256777682834"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-transparent text-white border-2 border-white/40 transition-all duration-300 transform hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: +256 777 682 834
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      <p className="font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function TrainingCategoryIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    cake: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
      </svg>
    ),
    utensils: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    coffee: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8m-4-4v4m-2-8a2 2 0 104 0V7H6v6a6 6 0 006 6zm6-6h2a2 2 0 010 4h-2" />
      </svg>
    ),
    clock: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    academic: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  };
  return icons[icon] || icons['academic'];
}

function FeatureIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    hand: (
      <svg className="w-7 h-7 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    users: (
      <svg className="w-7 h-7 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    clock: (
      <svg className="w-7 h-7 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    award: (
      <svg className="w-7 h-7 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-7 h-7 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[icon] || icons['hand'];
}
