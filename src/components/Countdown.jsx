import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'
import './Countdown.css'

const WEDDING_DATE = new Date('2026-07-15T10:00:00+05:30')

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)
  const [ref, visible] = useReveal(0.2)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section className="countdown">
      <div ref={ref} className={`countdown__inner fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Counting Down To</p>
        <h2 className="countdown__title">Our Wedding Day</h2>

        <div className="countdown__grid">
          {units.map((unit) => (
            <div className="countdown__card" key={unit.label}>
              <span className="countdown__value">{String(unit.value).padStart(2, '0')}</span>
              <span className="countdown__label">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
