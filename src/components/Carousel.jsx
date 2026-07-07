import { useState, useEffect, useRef, useCallback } from 'react'

// Auto-advancing carousel with a smooth horizontal slide.
// Each slide shows the full image (contain) over a blurred fill of the same
// image, so nothing is cropped but there are no empty dark gaps.
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
    }, 3500)
    return () => clearInterval(timer.current)
  }, [paused, count])

  const Slide = ({ src, i }) => (
    <div className="carousel-slide" key={src}>
      <div
        className="carousel-blur"
        style={{ backgroundImage: `url(${src})` }}
      />
      <img src={src} alt={`${alt} ${i + 1}`} className="carousel-img" />
    </div>
  )

  if (count === 1) {
    return (
      <div className="exp-photo">
        <div
          className="carousel-blur"
          style={{ backgroundImage: `url(${photos[0]})` }}
        />
        <img src={photos[0]} alt={alt} className="carousel-img" />
      </div>
    )
  }

  return (
    <div
      className="exp-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="exp-carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((src, i) => (
          <Slide src={src} i={i} key={src} />
        ))}
      </div>

      <button className="carousel-arrow left" onClick={() => go(index - 1)} aria-label="Previous image">
        ‹
      </button>
      <button className="carousel-arrow right" onClick={() => go(index + 1)} aria-label="Next image">
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
