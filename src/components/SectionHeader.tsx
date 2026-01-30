interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {subtitle && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light
            ? 'bg-white/10 text-white'
            : 'bg-red-100 text-red-700'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-slate-800'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${
          light ? 'text-white/80' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
