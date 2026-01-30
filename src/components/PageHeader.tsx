interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  extraBottomPadding?: boolean;
}

export default function PageHeader({ title, description, backgroundImage, extraBottomPadding }: PageHeaderProps) {
  return (
    <section
      className={`relative pt-32 md:pt-40 ${extraBottomPadding ? 'pb-32 md:pb-40' : 'pb-20 md:pb-28'}`}
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background gradient if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
