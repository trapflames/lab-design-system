import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded focus-within:ring-2 ring-cyan-200 outline-none transition-colors">
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className="w-5 h-5 text-cyan-500"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
