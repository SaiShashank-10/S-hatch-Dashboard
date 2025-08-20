import * as React from "react"

export type SpaceLoaderProps = {
  open: boolean
  message?: string
}

const SpaceLoader: React.FC<SpaceLoaderProps> = ({ open, message }) => {
  if (!open) return null

  const containerRef = React.useRef<HTMLDivElement>(null)
  const layerRefs = React.useRef<Array<HTMLDivElement | null>>([])

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const reduced = mq?.matches
    if (reduced) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      targetX = (x - 0.5) * 2 // -1..1
      targetY = (y - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const tick = () => {
      raf = 0
      // Apply parallax to registered layers
      const strengths = [4, 8, 12, 16, 24] // px offsets for increasing depth
      layerRefs.current.forEach((node, i) => {
        if (!node) return
        const s = strengths[i] ?? 6
        node.style.transform = `translate3d(${(-targetX * s).toFixed(2)}px, ${(targetY * s).toFixed(2)}px, 0)`
      })
    }

    window.addEventListener('mousemove', handler)
    return () => {
      window.removeEventListener('mousemove', handler)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_400px_at_80%_120%,rgba(168,85,247,0.12),transparent_60%),#000] will-change-transform motion-safe:animate-[camera-sway_10s_ease-in-out_infinite]">
      {/* Starfield layers */}
      <div
        ref={(n) => (layerRefs.current[0] = n)}
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.9)_99%,transparent_100%),radial-gradient(2px_2px_at_40%_60%,rgba(255,255,255,0.7)_99%,transparent_100%),radial-gradient(1.5px_1.5px_at_70%_20%,rgba(255,255,255,0.6)_99%,transparent_100%)] bg-[size:120px_120px,200px_200px,160px_160px] motion-safe:animate-[star-move_60s_linear_infinite,twinkle_6s_ease-in-out_infinite]"
        aria-hidden
      />
      <div
        ref={(n) => (layerRefs.current[1] = n)}
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(1.5px_1.5px_at_10%_80%,rgba(255,255,255,0.8)_99%,transparent_100%),radial-gradient(2px_2px_at_85%_35%,rgba(255,255,255,0.8)_99%,transparent_100%),radial-gradient(1px_1px_at_50%_50%,rgba(255,255,255,0.5)_99%,transparent_100%)] bg-[size:140px_140px,220px_220px,180px_180px] motion-safe:animate-[star-move_90s_linear_infinite_reverse,twinkle_8s_ease-in-out_infinite]"
        aria-hidden
      />

      {/* Nebula glows */}
  <div ref={(n) => (layerRefs.current[2] = n)} className="pointer-events-none absolute -inset-20 bg-[radial-gradient(400px_240px_at_20%_30%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(500px_300px_at_80%_70%,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" aria-hidden />
  <div ref={(n) => (layerRefs.current[3] = n)} className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden />

  {/* Comets */}
  <span className="pointer-events-none absolute -top-10 left-[20%] h-[2px] w-24 bg-gradient-to-r from-white to-transparent opacity-70 blur-[1px] -rotate-[20deg] motion-safe:animate-[comet_3.5s_linear_infinite] [animation-delay:0.5s] motion-reduce:hidden" aria-hidden />
  <span className="pointer-events-none absolute top-1/3 -left-10 h-[2px] w-28 bg-gradient-to-r from-white to-transparent opacity-60 blur-[1px] -rotate-[12deg] motion-safe:animate-[comet_4.2s_linear_infinite] [animation-delay:1.2s] motion-reduce:hidden" aria-hidden />
  <span className="pointer-events-none absolute top-[70%] left-[10%] h-[2px] w-20 bg-gradient-to-r from-white to-transparent opacity-60 blur-[1px] -rotate-[16deg] motion-safe:animate-[comet_3.8s_linear_infinite] [animation-delay:2s] motion-reduce:hidden" aria-hidden />

      {/* Center warp */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div ref={(n) => (layerRefs.current[4] = n)} className="relative size-40 sm:size-48 md:size-56">
          {/* Outer halo */}
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.4),rgba(168,85,247,0.4),rgba(59,130,246,0.4))] blur-2xl opacity-60 animate-[spin_18s_linear_infinite]" />
          {/* Ring */}
          <div className="absolute inset-6 rounded-full border-2 border-white/10 backdrop-blur-[2px]" />
          {/* Rotating beams */}
          <div className="absolute inset-0 rounded-full [mask-image:radial-gradient(circle,black_55%,transparent_60%)]">
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white to-transparent opacity-60" />
              <div className="absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-l from-white to-transparent opacity-60" />
              <div className="absolute left-1/2 bottom-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-white to-transparent opacity-60" />
              <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent opacity-60" />
            </div>
          </div>
          {/* Warp pulse rings */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-3 rounded-full border border-white/10 animate-[warp-pulse_2.4s_ease-out_infinite]" />
            <div className="absolute inset-5 rounded-full border border-white/10 animate-[warp-pulse_2.4s_ease-out_infinite] [animation-delay:0.6s]" />
            <div className="absolute inset-7 rounded-full border border-white/5 animate-[warp-pulse_2.4s_ease-out_infinite] [animation-delay:1.2s]" />
          </div>
          {/* Core */}
      <div className="absolute inset-1/3 rounded-full bg-gradient-to-tr from-primary/40 via-white/60 to-secondary/40 blur-md motion-safe:animate-pulse" />
      {/* Chromatic glow offsets */}
      <div className="absolute inset-[38%] rounded-full bg-primary/30 blur-xl translate-x-[1.5px] mix-blend-screen" />
      <div className="absolute inset-[38%] rounded-full bg-secondary/30 blur-xl -translate-x-[1.5px] mix-blend-screen" />

          {/* Orbiting satellites */}
          <div className="absolute inset-0">
            {/* Orbit 1 */}
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-[calc(50%-28px)] -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            </div>
            {/* Orbit 2 */}
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite_reverse]">
              <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-[calc(50%-40px)] -translate-y-1/2 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
            {/* Orbit track (subtle) */}
            <div className="absolute inset-[18px] rounded-full border border-white/5" />
            <div className="absolute inset-[26px] rounded-full border border-white/5" />
          </div>
        </div>
      </div>

  {/* Vignette, scanlines & grain overlays */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_50%,transparent_40%,rgba(0,0,0,0.35)_80%)]" aria-hidden />
  <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_3px)] mix-blend-soft-light motion-safe:animate-[scanMove_6s_linear_infinite]" aria-hidden />
    <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.65)_0px,rgba(255,255,255,0.65)_1px,transparent_1px,transparent_2px)] motion-safe:animate-[grainShift_6s_linear_infinite]" aria-hidden />

      {/* Loading text (centered, pill) */}
      <div
        className="pointer-events-none absolute z-10 left-1/2 -translate-x-1/2 px-4"
        style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 24px)" }}
      >
        <div className="inline-flex max-w-[92vw] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.08)]">
          <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-white/85 text-center">
            {message ?? "Entering AI Reality Check..."}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SpaceLoader
