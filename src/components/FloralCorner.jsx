import './FloralCorner.css'

/**
 * A soft, hand-drawn-style line botanical illustration used to frame
 * section corners, echoing the pressed-floral borders of a printed
 * invitation. Purely decorative — hidden from assistive tech.
 */
export default function FloralCorner({ position = 'top-left', className = '' }) {
  return (
    <svg
      className={`floral-corner floral-corner--${position} ${className}`}
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 8 C 40 20, 60 40, 66 78 C 70 104, 60 128, 40 150"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M8 8 C 26 34, 40 52, 82 62 C 112 69, 138 62, 160 44"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M40 24 C 46 30, 46 38, 40 44 C 34 38, 34 30, 40 24 Z" />
        <path d="M60 46 C 68 50, 70 58, 66 66 C 58 62, 54 54, 60 46 Z" />
        <path d="M92 60 C 100 58, 108 62, 110 70 C 102 72, 94 68, 92 60 Z" />
        <path d="M122 56 C 128 50, 136 50, 142 56 C 136 62, 128 62, 122 56 Z" />
      </g>
      <circle cx="150" cy="40" r="3.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="26" cy="70" r="2.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M20 90 C 30 96, 34 106, 30 118"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  )
}
