// Signature hero illustration: a hand-drafted building elevation that
// "draws" itself in on load. This is the one bold visual risk of the
// design — keep it as the only animated flourish on the page.
export default function BuildingSketch() {
  return (
    <svg viewBox="0 0 480 520" className="w-full max-w-[460px] h-auto overflow-visible">
      <path className="draw-line" d="M70 480 L70 120 L240 40 L410 120 L410 480" />
      <path className="draw-line delay1" d="M50 128 L240 44 L430 128" />
      <path className="draw-line faint delay1" d="M70 200 L410 200" />
      <path className="draw-line faint delay1" d="M70 280 L410 280" />
      <path className="draw-line faint delay1" d="M70 360 L410 360" />
      <path className="draw-line faint delay1" d="M70 440 L410 440" />
      <path className="draw-line delay2" d="M96 200 L96 240 L180 240 L180 200" />
      <path className="draw-line delay2" d="M300 200 L300 240 L384 240 L384 200" />
      <path className="draw-line delay2" d="M96 280 L96 320 L180 320 L180 280" />
      <path className="draw-line delay2" d="M300 280 L300 320 L384 320 L384 280" />
      <path className="draw-line delay2" d="M96 360 L96 400 L180 400 L180 360" />
      <path className="draw-line delay2" d="M300 360 L300 400 L384 400 L384 360" />
      <path className="draw-line delay3" d="M210 480 L210 400 L270 400 L270 480" />
      <path className="draw-line faint delay3" d="M30 480 L450 480" />
      <path className="draw-line faint delay3" d="M20 120 L20 480 M14 120 L26 120 M14 480 L26 480" />
      <text className="plan-label" x="245" y="30" textAnchor="middle">ELEVATION — HOUSE 04</text>
    </svg>
  )
}
