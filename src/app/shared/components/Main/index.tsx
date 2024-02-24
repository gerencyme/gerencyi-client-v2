'use client'

import { mainTV } from '@shared/components/Main/MainTV'
import { useTheme } from '@shared/hooks/contexts/useTheme'
import { TRootComponent } from '@shared/types'
import { useEffect, useState } from 'react'
import { VariantProps } from 'tailwind-variants'

type TMainProps = TRootComponent & VariantProps<typeof mainTV>

export function Main({ children, bgTheme }: TMainProps) {
  const { theme } = useTheme()
  const [isClient, setIsCLient] = useState(false)

  const isDarkMode = theme === 'dark' ? 'dark' : 'light'

  const bgByTheme: typeof bgTheme = theme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    setIsCLient(true)
  }, [])

  return (
    <main className={`${isDarkMode} ${mainTV({ bgTheme: bgByTheme })}`}>
      {isClient && children}
    </main>
  )
}
