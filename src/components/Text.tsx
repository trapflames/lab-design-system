import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextProps {
  textColor?: 'gray-100' | 'gray-200' | 'gray-400' | string
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Text({
  textColor = 'gray-100',
  size = 'md',
  children,
  asChild,
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(`text-${textColor} font-sans`, {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  )
}
