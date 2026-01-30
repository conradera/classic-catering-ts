import * as React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-red-700 text-white hover:bg-red-800 hover:scale-105 hover:shadow-xl hover:shadow-red-700/25 active:scale-95 focus:ring-red-500",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-900 hover:scale-105 hover:shadow-xl hover:shadow-slate-800/25 active:scale-95 focus:ring-slate-500",
    outline:
      "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:scale-105 hover:border-white/50 active:scale-95 focus:ring-white/50",
    ghost:
      "bg-transparent text-red-700 hover:bg-red-50 hover:scale-105 active:scale-95 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
