import useReveal from '../hooks/useReveal'
import './WeddingDetails.css'

export default function WeddingDetails() {
  const [ref, visible] = useReveal(0.2)

  return (
    <section id="events" className="details">
      <div ref={ref} className={`details__card fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Please Join Us</p>
        <h2 className="details__title">Wedding Reception</h2>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <p className="details__date">Wednesday, July 15, 2026</p>

        <p className="details__venue">
          Enayat Convention Centre
          <br />
          Arikkanjira, Paravanna
        </p>

        <p className="details__note">
          Your presence is the greatest gift we could ask for as we begin this
          new chapter together.
        </p>
      </div>
    </section>
  )
}
