import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'text-black text-sm font-sans font-semibold px-3 py-4 w-full bg-cyan-500 rounded hover:bg-cyan-200 transition-colors focus:ring-2 focus:ring-white'
      )}
    >
      {children}
    </Comp>
  )
}
