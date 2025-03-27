'use client'

import { Clipboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    toast.success('Copied!')
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleCopy}
          title="Copy"
          className={cn(
            'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
            className
          )}
        >
          <Clipboard className="w-4 h-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy</TooltipContent>
    </Tooltip>
  )
}
