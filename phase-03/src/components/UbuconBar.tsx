import SparkStatus from "@/components/SparkStatus";

/**
 * UbuCon India 2026 app bar, shared by every phase.
 *
 * `sparkChecks`: this app's health routes that proxy to the DGX Spark. When given, the
 * right-hand chip shows live Spark reachability. Phase 01 needs no Spark and passes none.
 */
export default function UbuconBar({
  phase,
  sparkChecks,
}: {
  phase: string;
  sparkChecks?: string[];
}) {
  return (
    <header className="uc-bar">
      <div className="uc-bar-inner">
        <div className="uc-lockup" aria-label="UbuCon India 2026, Bengaluru">
          <svg className="uc-mark" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#e95420" />
            <circle cx="16" cy="16" r="7.4" fill="none" stroke="#fff" strokeWidth="2.6" />
            <circle cx="9.2" cy="12.1" r="2.6" fill="#fff" stroke="#e95420" strokeWidth="1.4" />
            <circle cx="22.8" cy="12.1" r="2.6" fill="#fff" stroke="#e95420" strokeWidth="1.4" />
            <circle cx="16" cy="23.9" r="2.6" fill="#fff" stroke="#e95420" strokeWidth="1.4" />
          </svg>
          <span className="uc-word">
            <b>UbuCon</b> India 2026 <span>· Bengaluru</span>
          </span>
        </div>
        <div className="uc-meta">
          <span className="uc-chip phase">Phase {phase}</span>
          {sparkChecks && sparkChecks.length > 0 ? (
            <SparkStatus checks={sparkChecks} />
          ) : (
            <span className="uc-chip status" data-state="ok">
              Runs in your browser
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
