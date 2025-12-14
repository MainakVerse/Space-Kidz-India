"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
}

interface BlackHoleEffectProps {
  children: React.ReactNode
  className?: string
}

export function BlackHoleEffect({ children, className = "" }: BlackHoleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>()
  const isExploding = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const content = contentRef.current
    if (!container || !canvas || !content) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const createParticlesFromElement = () => {
      particles.current = []
      const rect = content.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      // Create a temporary canvas to capture the element
      const tempCanvas = document.createElement("canvas")
      tempCanvas.width = rect.width
      tempCanvas.height = rect.height
      const tempCtx = tempCanvas.getContext("2d", { willReadFrequently: true })
      if (!tempCtx) return

      // Draw the content (we'll use sample points instead of actual rendering)
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Sample points in a grid
      const gridSize = 4
      for (let x = 0; x < rect.width; x += gridSize) {
        for (let y = 0; y < rect.height; y += gridSize) {
          // Calculate distance from center
          const dx = x - centerX
          const dy = y - centerY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const angle = Math.atan2(dy, dx)

          // Create particle with velocity away from center
          const speed = 2 + Math.random() * 3
          particles.current.push({
            x: x + rect.left - containerRect.left,
            y: y + rect.top - containerRect.top,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 2 + Math.random() * 2,
            alpha: 1,
            color: `rgba(255, ${107 + Math.random() * 50}, ${35 + Math.random() * 50}, 1)`,
          })
        }
      }
    }

    const animate = () => {
      if (!isExploding.current) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.alpha -= 0.015
        particle.size *= 0.98

        if (particle.alpha <= 0 || particle.size < 0.5) return false

        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      if (particles.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(animate)
      } else {
        isExploding.current = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (content) content.style.opacity = "1"
      }
    }

    const handleMouseEnter = () => {
      if (isExploding.current) return

      isExploding.current = true
      if (content) content.style.opacity = "0"
      createParticlesFromElement()
      animate()
    }

    const handleMouseLeave = () => {
      // Let the animation complete
      setTimeout(() => {
        if (content && !isExploding.current) {
          content.style.opacity = "1"
        }
      }, 500)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
      <div ref={contentRef} className="relative z-0 transition-opacity duration-300">
        {children}
      </div>
    </div>
  )
}
