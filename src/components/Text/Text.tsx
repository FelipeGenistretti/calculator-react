import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react"

const textVariants = {
  default: 'text-xl',
  muted: 'text-xl text-[#6B6B6B]',
  heading: 'text-2xl',
  blast: 'text-3xl text-white'
}

export interface TextProps {
  variants?: keyof typeof textVariants
  children: ReactNode
  className?: string
  as?: ElementType 
}

export function Text({
  children,
  variants = "default",
  className = "",
  as: Component = "span",
  ...props
}: TextProps) {
  
  const textClass = textVariants[variants] ?? textVariants.default

  return (
    <Component
      {...props}  
      className={`${textClass} ${className}`}
    >
      {children}
    </Component>
  )
}
