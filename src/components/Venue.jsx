import useReveal from '../hooks/useReveal'
import venuePhoto from '../assets/venue-photo.jpg'
import './Venue.css'

export default function Venue() {
  const [ref, visible] = useReveal(0.15)

  return (
    <section id="venue" className="venue">
      <div ref={ref} className={`venue__inner fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">The Venue</p>
        <h2 className="venue__title">Enayat Convention Centre</h2>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <div className="venue__image">
          <img
            src={venuePhoto}
            alt="Enayat Convention Centre entrance lit up in the evening"
            loading="lazy"
          />
        </div>

        <p className="venue__desc">
          Set in Arikkanjira, Paravanna, the venue offers a graceful,
          light-filled space for our celebration — a fitting backdrop for an
          evening of prayer, joy and togetherness with the people we hold
          dear.
        </p>
      </div>
    </section>
  )
}
