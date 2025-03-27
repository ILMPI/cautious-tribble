'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function AnimatedPage({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false} >
      <motion.div
        key={pathname}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 20,
        // }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1] // ease-in-out (Bezier)
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
