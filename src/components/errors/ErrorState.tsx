import {
  AlertTriangle,
  Info,
  CheckCircle,
  PlugZap,
  XCircle,
} from "lucide-react"

export interface ErrorBlockProps {
  title?: string
  message?: string
  variant?: "error" | "info" | "success" | "warning" | "offline"
  color?: string
  iconSize?: number
}

export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again later.",
  variant = "error",
  color,
  iconSize = 80, // default 5rem (was 4)
}: ErrorBlockProps) {
  const iconMap = {
    error: XCircle,
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    offline: PlugZap,
  }

  const defaultColors = {
    error: "text-red-500 dark:text-red-400",
    info: "text-blue-500 dark:text-blue-400",
    success: "text-green-500 dark:text-green-400",
    warning: "text-yellow-500 dark:text-yellow-400",
    offline: "text-muted-foreground dark:text-muted",
  }

  const Icon = iconMap[variant]
  const colorClass = color || defaultColors[variant]

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 space-y-6 max-w-xl mx-auto">
      <Icon
        className={`${colorClass}`}
        style={{ width: iconSize, height: iconSize }}
      />

      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h1>
        <p className="text-muted-foreground text-base md:text-lg">{message}</p>
      </div>
    </div>
  )
}
