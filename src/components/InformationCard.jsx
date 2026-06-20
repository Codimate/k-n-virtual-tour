/**
 * InformationCard
 * ───────────────
 * Reusable glassmorphic Bento Grid card.
 *
 * Props:
 *   icon     – emoji / icon string
 *   title    – card heading
 *   variant  – "default" | "wide" | "full" (controls grid span)
 *   delay    – stagger delay in ms (for entrance animation)
 *   children – card body content
 */
export default function InformationCard({
  icon,
  title,
  variant = "default",
  delay = 0,
  children,
}) {
  const variantClass =
    variant !== "default"
      ? `info-card--${variant}`
      : "";

  return (
    <div
      className={`info-card ${variantClass}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {(icon || title) && (
        <div className="info-card-header">
          {icon && (
            <span className="info-card-icon">
              {icon}
            </span>
          )}
          {title && (
            <h3 className="info-card-title">
              {title}
            </h3>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
