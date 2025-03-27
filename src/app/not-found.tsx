'use client'

import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function NotFound() {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 space-y-5 text-center">
        <AlertTriangle className="w-10 h-10 text-destructive" />
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md">
          The page you were looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant="outline">← Go Home</Button>
        </Link>
      </main>
    )
  }
  