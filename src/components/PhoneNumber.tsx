'use client'

import { Phone, PhoneOutgoing } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  phone: string
  className?: string
}

export function PhoneNumber({ phone, className }: Props) {
  const { main, extension } = parsePhoneWithExtension(phone)

  return (
    <p className={cn('flex items-center gap-2 text-m', className)}>
      <Phone className="w-4 h-4 shrink-0" />
      <span>{main}</span>
      {extension && (
        <span className="inline-flex items-center gap-1 text-xm ">
          <PhoneOutgoing className="w-3 h-3" />
          {extension}
        </span>
      )}
    </p>
  )
}

function parsePhoneWithExtension(phone: string): { main: string; extension: string | null } {
  const [main, ext] = phone.split(/ x| ext\.?/i)
  const cleaned = main.replace(/[^\d]/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)

  const formattedMain = match
    ? `(${match[1]}) ${match[2]}-${match[3]}`
    : main.trim()

  return {
    main: formattedMain,
    extension: ext?.trim() || null
  }
}
