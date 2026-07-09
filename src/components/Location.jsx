import useReveal from '../hooks/useReveal'
import venueQr from '../assets/venue-qr.png'
import venueMap from '../assets/venue-map.png'
import './Location.css'

// Resolved from the venue's Google Maps share link.
const VENUE_COORDS = '10.8922474,75.8945182'
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_COORDS}`

export default function Location() {
  const [ref, visible] = useReveal(0.15)

  return (
    <section id="location" className="location">
      <div ref={ref} className={`location__inner fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Find Us</p>
        <h2 className="location__title">Location &amp; Directions</h2>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <a
          className="location__map"
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open map to Enayat Convention Centre in Google Maps"
        >
          <img
            src={venueMap}
            alt="Map showing Enayat Convention Centre near Paravanna"
            loading="lazy"
          />
        </a>

        <div className="location__row">
          <div className="location__qr">
            <img src={venueQr} alt="QR code for directions to the venue" width="110" height="110" loading="lazy" />
            <span className="location__qr-label">Scan For Directions</span>
          </div>

          <a
            className="btn-outline"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
