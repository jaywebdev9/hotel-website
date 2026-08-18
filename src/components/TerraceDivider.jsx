export default function TerraceDivider({ fill = '#142019', flip = false }) {
  return (
    <div className={`terrace ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path
          d="M0,60 L0,40 L150,40 L150,20 L300,20 L300,0 L450,0 L450,20 L600,20 L600,40 L750,40 L750,20 L900,20 L900,0 L1050,0 L1050,20 L1200,20 L1200,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
