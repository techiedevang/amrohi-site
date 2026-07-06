const items = [
  { num: '27', suffix: 'yrs', label: 'In continuous practice as a family studio' },
  { num: '180', suffix: '+', label: 'Addresses designed and delivered' },
  { num: '06', suffix: '', label: 'Disciplines under one roof' },
  { num: '04', suffix: '', label: 'Projects taken on at any given time' },
]

export default function TrustLedger() {
  return (
    <div className="relative z-10 border-t border-white/10 mt-10 px-6 md:px-14">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`py-6 md:py-8 px-0 md:px-8 border-white/10
              ${i === 0 ? 'md:border-l-0 md:pl-0' : 'md:border-l'}
              ${i % 2 === 1 ? 'pl-6 border-l md:pl-8' : 'pr-6 md:pr-8'}
              ${i > 1 ? 'border-t md:border-t-0' : ''}
            `}
          >
            <div className="font-display font-medium text-[34px] text-brass-light flex items-baseline gap-1">
              {item.num}
              {item.suffix && (
                <sup className="font-body text-sm font-semibold text-brass-light -top-3.5">
                  {item.suffix}
                </sup>
              )}
            </div>
            <div className="mt-2 text-xs text-bone-dim leading-relaxed">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
