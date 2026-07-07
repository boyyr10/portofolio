import { useState, useEffect, useRef, useCallback } from 'react'

// Auto-advancing image carousel with manual arrow + dot controls.
// Pauses auto-play on hover. Falls back to a single static image if only one photo.
export default function Carousel({ photos, alt }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const count = photos.length

  const go = useCallback(
    (next) => setIndex((i) => (next + count) % count),
    [count]
  )

  useEffect(() => {
    if (paused || count <= 1) return
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 3000)
    return () => clearInterval(timer.current)
  }, [paused, count])

  if (count === 1) {
    return (
      <div className="exp-photo">
        <img src={photos[0]} alt={alt} />
      </div>
    )
  }

  return (
    <div
      className="exp-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="exp-carousel-track">
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={i === index ? 'active' : ''}
          />
        ))}
      </div>

      <button
        className="carousel-arrow left"
        onClick={() => go(index - 1)}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        className="carousel-arrow right"
        onClick={() => go(index + 1)}
        aria-label="Next image"
      >
        ›
      </button>

      <div className="carousel-dots">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
