export type MascotPose = 'idle' | 'wave' | 'celebrate' | 'sleepy' | 'thinking'

interface MascotProps {
  pose?: MascotPose
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZE_PX: Record<NonNullable<MascotProps['size']>, number> = {
  sm: 56,
  md: 96,
  lg: 160,
}

const TIGER_ORANGE = '#FF6B4A'
const TIGER_ORANGE_DARK = '#C6472A'
const TIGER_CREAM = '#FFF1E4'
const TIGER_BLUSH = '#FFB347'

/** Ears + head + muzzle + stripes + blush — identical across every pose, so the character stays recognizable. */
function HeadBase() {
  return (
    <>
      {/* Ears */}
      <path d="M22 34 Q18 12 40 24 Q34 38 22 34Z" fill={TIGER_ORANGE} />
      <path d="M98 34 Q102 12 80 24 Q86 38 98 34Z" fill={TIGER_ORANGE} />
      <path d="M27 30 Q26 18 37 24 Q33 32 27 30Z" fill={TIGER_CREAM} />
      <path d="M93 30 Q94 18 83 24 Q87 32 93 30Z" fill={TIGER_CREAM} />

      {/* Head */}
      <circle cx="60" cy="76" r="44" fill={TIGER_ORANGE} />

      {/* Forehead stripes */}
      <path d="M46 42 Q49 50 45 57" stroke={TIGER_ORANGE_DARK} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M60 40 Q60 49 60 57" stroke={TIGER_ORANGE_DARK} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M74 42 Q71 50 75 57" stroke={TIGER_ORANGE_DARK} strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Muzzle */}
      <ellipse cx="60" cy="93" rx="24" ry="18" fill={TIGER_CREAM} />

      {/* Cheek blush */}
      <circle cx="30" cy="86" r="7" fill={TIGER_BLUSH} opacity="0.55" />
      <circle cx="90" cy="86" r="7" fill={TIGER_BLUSH} opacity="0.55" />
    </>
  )
}

function Eyes({ pose }: { pose: MascotPose }) {
  if (pose === 'sleepy') {
    return (
      <>
        <path d="M40 68 Q46 72 52 68" stroke="#2A1410" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M68 68 Q74 72 80 68" stroke="#2A1410" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </>
    )
  }
  if (pose === 'thinking') {
    return (
      <>
        <path d="M39 63 Q46 58 54 62" stroke="#2A1410" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M41 69 Q46 66 51 69" stroke="#2A1410" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <circle cx="74" cy="69" r="6.5" fill="#fff" />
        <circle cx="76" cy="67.5" r="3.2" fill="#2A1410" />
      </>
    )
  }
  // idle / wave / celebrate — bright round eyes with a little shine
  return (
    <>
      <circle cx="46" cy="69" r="6.5" fill="#fff" />
      <circle cx="47.5" cy="69" r="3.6" fill="#2A1410" />
      <circle cx="49" cy="67" r="1.1" fill="#fff" />
      <circle cx="74" cy="69" r="6.5" fill="#fff" />
      <circle cx="75.5" cy="69" r="3.6" fill="#2A1410" />
      <circle cx="77" cy="67" r="1.1" fill="#fff" />
    </>
  )
}

function Mouth({ pose }: { pose: MascotPose }) {
  if (pose === 'sleepy') {
    return <ellipse cx="60" cy="98" rx="3" ry="2" fill="#2A1410" />
  }
  if (pose === 'celebrate' || pose === 'wave') {
    return <path d="M48 96 Q60 108 72 96" stroke="#2A1410" strokeWidth="3.5" strokeLinecap="round" fill="none" />
  }
  if (pose === 'thinking') {
    return <path d="M52 100 Q60 98 66 101" stroke="#2A1410" strokeWidth="3" strokeLinecap="round" fill="none" />
  }
  // idle
  return <path d="M51 97 Q60 103 69 97" stroke="#2A1410" strokeWidth="3" strokeLinecap="round" fill="none" />
}

function Nose() {
  return <path d="M56 84 Q60 88 64 84 Q60 81 56 84Z" fill="#2A1410" />
}

/** Pose-specific extras rendered above/around the head base. */
function PoseExtras({ pose }: { pose: MascotPose }) {
  if (pose === 'wave') {
    return (
      <g>
        <path d="M96 56 Q90 34 106 26 Q120 32 116 48 Q114 58 103 60Z" fill={TIGER_ORANGE} />
        <circle cx="103" cy="35" r="3" fill={TIGER_CREAM} />
        <circle cx="110" cy="39" r="3" fill={TIGER_CREAM} />
        <circle cx="112" cy="46" r="3" fill={TIGER_CREAM} />
      </g>
    )
  }
  if (pose === 'celebrate') {
    return (
      <g>
        <path d="M28 54 Q10 44 12 26 Q22 16 32 28 Q36 42 28 54Z" fill={TIGER_ORANGE} />
        <circle cx="17" cy="27" r="2.6" fill={TIGER_CREAM} />
        <circle cx="24" cy="22" r="2.6" fill={TIGER_CREAM} />
        <circle cx="29" cy="30" r="2.6" fill={TIGER_CREAM} />

        <path d="M92 54 Q110 44 108 26 Q98 16 88 28 Q84 42 92 54Z" fill={TIGER_ORANGE} />
        <circle cx="103" cy="27" r="2.6" fill={TIGER_CREAM} />
        <circle cx="96" cy="22" r="2.6" fill={TIGER_CREAM} />
        <circle cx="91" cy="30" r="2.6" fill={TIGER_CREAM} />

        <path d="M8 14 L10 22 M18 10 L15 18 M2 20 L9 24" stroke={TIGER_BLUSH} strokeWidth="3" strokeLinecap="round" />
        <path d="M112 14 L110 22 M102 10 L105 18 M118 20 L111 24" stroke={TIGER_BLUSH} strokeWidth="3" strokeLinecap="round" />
      </g>
    )
  }
  if (pose === 'sleepy') {
    return (
      <text x="86" y="34" fontSize="16" fontWeight="700" fill="#9B99AF" fontFamily="system-ui">Zzz</text>
    )
  }
  if (pose === 'thinking') {
    return (
      <g opacity="0.9">
        <circle cx="96" cy="30" r="3" fill="#fff" />
        <circle cx="103" cy="22" r="4.5" fill="#fff" />
        <text x="103" y="26" fontSize="11" fontWeight="700" fill="#2A1410" textAnchor="middle" fontFamily="system-ui">?</text>
      </g>
    )
  }
  return null
}

/**
 * A small, flat-geometry tiger cub mascot — reused across empty/celebration/
 * welcome moments to give the app warmth without touching the core Dark
 * Premium visual language. Every pose shares the same head/body base
 * (HeadBase) so the character stays recognizable; only eyes, mouth, and a
 * few pose-specific accessories change.
 */
export function Mascot({ pose = 'idle', size = 'md', className }: MascotProps) {
  const px = SIZE_PX[size]
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Linh vật hổ con"
    >
      <PoseExtras pose={pose} />
      <HeadBase />
      <Eyes pose={pose} />
      <Nose />
      <Mouth pose={pose} />
    </svg>
  )
}
