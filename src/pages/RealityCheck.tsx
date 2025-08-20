import * as React from "react"
import AILoader from "@/components/ui/ai-loader"
import { useNavigate } from "react-router-dom"

const RealityCheck: React.FC = () => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true)

  React.useEffect(() => {
    // Simulate processing; after complete, navigate back or forward as desired
    const t = setTimeout(() => {
      setOpen(false)
      navigate("/reports")
    }, 2800)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="relative min-h-[calc(100vh-4rem)] grid place-items-center">{/* account for header height */}
      {open && (
        <div className="flex flex-col items-center gap-4">
          <AILoader />
          <div className="text-xs sm:text-sm md:text-base text-white/80">
            Calibrating sensors • Mapping reality • Engaging warp
          </div>
        </div>
      )}
    </div>
  )
}

export default RealityCheck
