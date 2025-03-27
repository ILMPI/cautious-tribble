'use client'
import { AlertTriangle } from 'lucide-react'

export function ErrorNotice({ message }: { message: string }) {
  return (
    <div className="w-full p-4 bg-destructive/10 border border-destructive text-destructive flex items-center gap-2 rounded-md">
      <AlertTriangle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  )
}
