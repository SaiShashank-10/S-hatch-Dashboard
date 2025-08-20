import * as React from "react"
import { cn } from "@/lib/utils"

export const Component: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const squareRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!container || !wrapper) return

    const letters = Array.from(
      wrapper.querySelectorAll<HTMLSpanElement>(".loader-letter")
    )

    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    const reduced = mq?.matches
    if (reduced) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    const tiltMax = 10 // degrees

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width // 0..1
      const ny = (e.clientY - rect.top) / rect.height
      // center -1..1
      targetX = (nx - 0.5) * 2
      targetY = (ny - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(update)
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      if (!raf) raf = requestAnimationFrame(update)
    }

    const update = () => {
      raf = 0
      const rx = (targetY * tiltMax).toFixed(2)
      const ry = (-targetX * tiltMax).toFixed(2)
      wrapper.style.transformStyle = "preserve-3d"
      wrapper.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`

      // parallax for letters (closer letters pop out a bit)
      letters.forEach((el, i) => {
        const depth = (i / Math.max(letters.length - 1, 1)) * 1.5 // 0..1.5
        const tx = (-targetX * (2 + depth * 2)).toFixed(2)
        const ty = (targetY * (2 + depth * 2)).toFixed(2)
        const tz = (depth * 8).toFixed(2)
        el.style.transform = `translate3d(${tx}px, ${ty}px, ${tz}px)`
        el.style.willChange = "transform"
      })

      // square gets strongest parallax
      if (squareRef.current) {
        const tx = (-targetX * 6).toFixed(2)
        const ty = (targetY * 6).toFixed(2)
        squareRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 14px)`
        squareRef.current.style.willChange = "transform"
      }
    }

    container.addEventListener("mousemove", onMove)
    container.addEventListener("mouseleave", onLeave)
    return () => {
      container.removeEventListener("mousemove", onMove)
      container.removeEventListener("mouseleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("w-full flex items-center justify-center", className)}
      style={{ perspective: "1000px" }}
      aria-label="Generating loader"
      role="status"
    >
      <div ref={wrapperRef} className="loader-wrapper will-change-transform">
        <span className="loader-letter">G</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">t</span>
        <span className="loader-letter">i</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">g</span>

        <div ref={squareRef} className="loader will-change-transform" />
      </div>
    </div>
  )
}

export default Component
