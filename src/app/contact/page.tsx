import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Classic Catering Uganda for culinary training inquiries, catering bookings, and business consultations.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We&apos;d love to hear from you. Get in touch with our team."
        backgroundImage="/images/cla47jpgc.jpg"
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-cream pattern-overlay corner-rings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Location */}
            <div className="premium-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
                <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Visit Us</h3>
              <p className="text-slate-600">{contactInfo.address}</p>
            </div>

            {/* Phone */}
            <div className="premium-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
                <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Call Us</h3>
              <div className="space-y-1">
                {contactInfo.phones.map((phone, index) => (
                  <a key={index} href={`tel:${phone}`} className="block text-slate-600 hover:text-red-800 transition-colors font-medium">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="premium-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
                <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Email Us</h3>
              <div className="space-y-1">
                {contactInfo.emails.map((email, index) => (
                  <a key={index} href={`mailto:${email}`} className="block text-slate-600 hover:text-red-800 transition-colors text-sm font-medium">
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white rings-top-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="section-divider mb-12">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="premium-card p-8">
              <div className="premium-badge inline-flex mb-4">
                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get In Touch
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="premium-card p-8 bg-gradient-to-br from-green-50 to-white border-green-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Quick Response on WhatsApp</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      For faster responses, reach us directly on WhatsApp. We&apos;re available during business hours.
                    </p>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 active:scale-95"
                    >
                      Chat on WhatsApp
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="premium-card p-8">
                <div className="premium-badge inline-flex mb-4">
                  <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Business Hours
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">When We&apos;re Open</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between p-3 bg-cream rounded-lg">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-semibold text-slate-800">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between p-3 bg-cream rounded-lg">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-semibold text-slate-800">9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-semibold text-red-700">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="premium-card p-8">
                <div className="premium-badge inline-flex mb-4">
                  <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  Quick Links
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Inquiries</h3>
                <div className="space-y-3">
                  <a href="/courses" className="flex items-center gap-3 p-4 bg-cream rounded-xl hover:bg-red-50 border border-transparent hover:border-red-200 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-red-900">Course Enrollment</span>
                  </a>
                  <a href="/services#catering" className="flex items-center gap-3 p-4 bg-cream rounded-xl hover:bg-red-50 border border-transparent hover:border-red-200 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-red-900">Catering Booking</span>
                  </a>
                  <a href="/services#consulting" className="flex items-center gap-3 p-4 bg-cream rounded-xl hover:bg-red-50 border border-transparent hover:border-red-200 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-red-900">Business Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        {/* Map Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Find Us</h3>
                  <p className="text-white/80 text-sm">Kisaasi, Kampala, Uganda</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Kisaasi,Kampala,Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-700 font-medium rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
        {/* Google Map Embed */}
        <div className="h-[400px] md:h-[500px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.077921225042!2d32.5800!3d0.3650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f90c5b1a7%3A0x1b0f3b0f3b0f3b0f!2sKisaasi%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1706600000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Classic Catering Uganda Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </section>
    </>
  );
}
