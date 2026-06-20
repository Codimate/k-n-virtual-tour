import { useEffect, useRef, useState } from "react";

/**
 * StatisticsSection
 * ─────────────────
 * Renders a row of animated stat counters.
 *
 * Props:
 *   stats – array of { value, label, icon }
 */
export default function StatisticsSection({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="info-stats-grid">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="info-stat-item"
        >
          <span className="info-stat-icon">
            {stat.icon}
          </span>

          <AnimatedValue
            value={stat.value}
            delay={index * 120}
          />

          <p className="info-stat-label">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Animated Value ────────────────────────────────────────── */

/**
 * If the value starts with a number, animate a count-up.
 * Otherwise, display it directly with a fade-in.
 */
function AnimatedValue({ value, delay = 0 }) {
  const [display, setDisplay] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    // Extract leading numeric portion (e.g. "10,000+" → 10000)
    const raw = value.replace(/,/g, "");
    const match = raw.match(/^[\d.]+/);

    if (!match) {
      // Non-numeric value — just fade in
      const timeout = setTimeout(
        () => setDisplay(value),
        delay
      );
      return () => clearTimeout(timeout);
    }

    const target = parseFloat(match[0]);
    const suffix = raw.slice(match[0].length);
    const hasCommas = value.includes(",");
    const isDecimal = match[0].includes(".");
    const duration = 1200; // ms
    const startTime = performance.now() + delay;
    let raf;

    const animate = (now) => {
      const elapsed = now - startTime;

      if (elapsed < 0) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased =
        1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      let formatted;
      if (isDecimal) {
        formatted = current.toFixed(1);
      } else {
        const rounded = Math.round(current);
        formatted = hasCommas
          ? rounded.toLocaleString()
          : String(rounded);
      }

      setDisplay(formatted + suffix);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [value, delay]);

  return (
    <p ref={ref} className="info-stat-value">
      {display || value}
    </p>
  );
}
