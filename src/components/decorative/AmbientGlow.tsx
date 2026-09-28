interface AmbientGlowProps {
  /** 'default' matches the landing hero's glow strength (page already has other visual content). 'strong' is for otherwise-empty focus-mode/auth pages that need the glow to do more of the work filling negative space. */
  intensity?: 'default' | 'strong'
}

/**
 * Soft blurred color blobs used as a background layer — extracted from the
 * landing hero so the same warm ambient feel can be reused on pages that are
 * otherwise flat black (auth, 404, focus-mode study screens). Purely
 * decorative: absolutely positioned, non-interactive, and rendered behind
 * page content via -z-10.
 */
export function AmbientGlow({ intensity = 'default' }: AmbientGlowProps) {
  const opacity = intensity === 'strong' ? { coral: 0.07, blue: 0.06 } : { coral: 0.04, blue: 0.035 }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-accent-coral blur-[160px]"
        style={{ opacity: opacity.coral }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue blur-[140px]"
        style={{ opacity: opacity.blue }}
      />
    </div>
  )
}
