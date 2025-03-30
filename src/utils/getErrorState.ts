import type { ErrorBlockProps } from '@/components/errors/ErrorState'

export function getErrorState(error: unknown): {
  title: string
  message: string
  variant: ErrorBlockProps["variant"]
} {
  const title = "Something went wrong"
  const message = "Please try again later."
  const variant: ErrorBlockProps["variant"] = "error"

  if (typeof window !== "undefined" && !navigator.onLine) {
    return {
      title: "You're offline",
      message: "Check your internet connection and try again.",
      variant: "offline",
    }
  }

  if (error instanceof TypeError) {
    return {
      title: "Network Error",
      message: "We couldn&apos;t reach the server. Please check your connection.",
      variant: "offline",
    }
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  ) {
    const msg = (error as { message: string }).message

    if (msg.includes("404")) {
      return {
        title: "Users not found",
        message: "We couldn’t find any users matching the criteria.",
        variant: "info",
      }
    }

    if (msg.includes("timeout") || msg.includes("AbortError")) {
      return {
        title: "Request timed out",
        message: "The server took too long to respond.",
        variant: "warning",
      }
    }
  }

  return { title, message, variant }
}
