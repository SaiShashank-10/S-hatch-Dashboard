import * as React from "react"
import { cn } from "@/lib/utils"

export const Component: React.FC<{ className?: string }> = ({ className }) => {
  // keeping state for parity with provided code; not used yet
  const [count] = React.useState(0)

  return (
    <div className={cn("w-full flex items-center justify-center", className)}>
      <div className="loader-wrapper">
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

        <div className="loader" />
      </div>
    </div>
  )
}

export default Component
