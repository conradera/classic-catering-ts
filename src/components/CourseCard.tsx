import { Course } from '@/types';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const categoryColors = {
    training: 'bg-blue-100 text-blue-700',
    professional: 'bg-red-100 text-red-900',
    business: 'bg-emerald-100 text-emerald-700',
  };

  const categoryLabels = {
    training: 'Short Course',
    professional: 'Professional',
    business: 'Business',
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-red-200">
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[course.category]}`}>
            {categoryLabels[course.category]}
          </span>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Duration</p>
            <p className="text-sm font-semibold text-slate-800">{course.duration}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-800 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Features */}
      <div className="p-6">
        <ul className="space-y-2 mb-6">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
              <svg className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Investment</p>
            <p className="text-xl font-bold text-slate-800">{course.price}</p>
          </div>
          <Button href="/contact" variant="primary" size="sm">
            Enroll Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
