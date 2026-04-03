export function SectionSwoosh({ flip = false, color = "#0658a5" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`} style={{ lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
        <path d="M0,60 L0,40 Q360,0 720,25 Q1080,50 1440,15 L1440,60 Z" fill={color} />
        <path d="M0,40 Q360,0 720,25 Q1080,50 1440,15" stroke="rgba(45,171,226,0.2)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
