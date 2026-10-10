import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padded?: boolean;
  bordered?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
  padded = true,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-bg-primary
        ${bordered ? "border border-border-primary" : ""}
        ${padded ? "p-6 lg:p-8" : ""}
        rounded-2xl
        ${hover ? "hover:shadow-xl hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-normal" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center mb-5 text-brand-600 dark:text-brand-400 transition-colors duration-normal group-hover:scale-110 group-hover:bg-brand-200 dark:group-hover:bg-brand-800/50">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group block ${className}`}
        style={{ textDecoration: "none" }}
      >
        <Card hover padded>{content}</Card>
      </a>
    );
  }

  return <Card hover padded className={className}>{content}</Card>;
}

export function StatCard({
  label,
  value,
  icon,
  trend,
  className = "",
}: {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: { value: string; positive: boolean };
  className?: string;
}) {
  return (
    <Card padded className={className}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-text-tertiary text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-text-primary mt-1">{value}</p>
        </div>
        {icon && <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400">{icon}</div>}
      </div>
      {trend && (
        <div className="flex items-center gap-1">
          <span className={`text-sm font-medium ${trend.positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {trend.positive ? "▲" : "▼"} {trend.value}
          </span>
          <span className="text-text-tertiary text-xs">vs last period</span>
        </div>
      )}
    </Card>
  );
}