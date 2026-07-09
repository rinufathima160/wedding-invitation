import useReveal from '../hooks/useReveal'
import FloralCorner from './FloralCorner'
import './Closing.css'

export default function Closing() {
  const [ref, visible] = useReveal(0.2)

  return (
    <section id="rsvp" className="closing">
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      <div ref={ref} className={`closing__inner fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">With Gratitude</p>
        <p className="closing__thanks">
          Thank you for being part of our story. Your prayers and presence
          mean the world to us as we step into this new beginning.
        </p>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <p className="closing__verse">"And We created you in pairs."</p>
        <p className="closing__reference">Qur'an 78:8</p>

        <h2 className="closing__names">Nihana &amp; Riyas</h2>
        <p className="closing__forever">Forever &amp; Always</p>
      </div>
    </section>
  )
}
