import { useReveal } from '../useReveal'

// Wraps children and fades them up on scroll into view.
export default function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}
