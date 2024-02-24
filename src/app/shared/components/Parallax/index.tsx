'use client'

import { parallaxTV } from '@shared/components/Parallax/ParallaxTV'
import {
  IPosition,
  handleMouseMove,
  calculateTransform,
} from '@shared/components/Parallax/parallaxUtils'
import { TRootComponent } from '@shared/types'
import { useEffect, useState } from 'react'

export function Parallax({ children }: TRootComponent) {
  const [mousePosition, setMousePosition] = useState<IPosition>({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div
      className={parallaxTV()}
      onMouseMove={(e) =>
        handleMouseMove(e as unknown as MouseEvent, setMousePosition)
      }
    >
      <div
        style={{
          transform: calculateTransform(mousePosition),
        }}
      >
        {children}
      </div>
    </div>
  )
}
