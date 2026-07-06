import { useEffect, useRef } from 'react'

// A full-page canvas grid where cells near the cursor light up with a neon glow.
// Sits behind content (z-index 0). Disabled on touch devices and reduced-motion.
export default function GridHighlight() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const GAP = 40
    const RADIUS = 140
    let mouseX = -9999
    let mouseY = -9999
    let raf

    // Read the current --neon color from CSS so it adapts to light/dark theme.
    const getNeonRGB = () => {
      const val = getComputedStyle(document.documentElement)
        .getPropertyValue('--neon')
        .trim()
      // Expect a hex like #00e5c7
      const hex = val.replace('#', '')
      if (hex.length === 6) {
        const r = parseInt(hex.slice(0, 2), 16)
        const g = parseInt(hex.slice(2, 4), 16)
        const b = parseInt(hex.slice(4, 6), 16)
        return `${r},${g},${b}`
      }
      return '0,229,199'
    }
    let neon = getNeonRGB()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      neon = getNeonRGB()
    }
    resize()

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const onLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let x = 0; x < canvas.width; x += GAP) {
        for (let y = 0; y < canvas.height; y += GAP) {
          const dx = x + GAP / 2 - mouseX
          const dy = y + GAP / 2 - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const glow = Math.max(0, 1 - dist / RADIUS)
          if (glow > 0.05) {
            ctx.fillStyle = `rgba(${neon},${glow * 0.22})`
            ctx.fillRect(x, y, GAP, GAP)
            ctx.strokeStyle = `rgba(${neon},${glow * 0.5})`
            ctx.strokeRect(x, y, GAP, GAP)
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas className="grid-highlight" ref={canvasRef} aria-hidden="true" />
}
