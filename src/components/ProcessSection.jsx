/**
 * ProcessSection
 * ──────────────
 * Horizontal stepped process flow with numbered circles and connector lines.
 *
 * Props:
 *   steps – array of { step, title, description }
 *   accent – CSS color for step circles
 */
export default function ProcessSection({
  steps,
  accent = "#0a84ff",
}) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="info-process-flow">
      {steps.map((step, index) => (
        <div
          key={step.step}
          className="info-process-step"
          style={{
            animationDelay: `${400 + index * 150}ms`,
          }}
        >
          <div
            className="info-process-number"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${adjustBrightness(accent, -30)})`,
            }}
          >
            {step.step}
          </div>

          <p className="info-process-title">
            {step.title}
          </p>

          <p className="info-process-description">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Darken or lighten a hex color.
 */
function adjustBrightness(hex, amount) {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);

  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  return `#${((r << 16) | (g << 8) | b)
    .toString(16)
    .padStart(6, "0")}`;
}
