// Persistent contact affordance — always visible, not buried in a
// Contact section. This is one of the conversion fixes from the plan.
export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a
        href="https://wa.me/918591445462"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-brass hover:bg-brass-light text-ink text-[13px] font-medium tracking-wide px-5 py-3.5 rounded-sm shadow-lg shadow-black/40 transition-colors"
      >
        WhatsApp Us
      </a>
      <a
        href="tel:+918591445462"
        className="flex items-center gap-2 bg-ink-soft border border-white/15 hover:border-brass-light text-bone text-[13px] tracking-wide px-5 py-3.5 rounded-sm shadow-lg shadow-black/40 transition-colors"
      >
        Call Now
      </a>
    </div>
  )
}
