'use client'

import Link from 'next/link'
import { Home, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex items-center space-x-2'
          )}
        >
          <Home className="w-5 h-5" />
        </Link>


        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        )}
      </div>
    </header>
  )
}
