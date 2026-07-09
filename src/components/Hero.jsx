import useReveal from '../hooks/useReveal'
import FloralCorner from './FloralCorner'
import venueQr from '../assets/venue-qr.png'
import './Hero.css'

export default function Hero() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section id="home" className="hero">
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      <div ref={ref} className={`hero__content fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="arabic-text hero__bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

        <p className="eyebrow hero__eyebrow">Together With Their Families</p>

        <h1 className="hero__names">
          <span>Nihana</span>
          <span className="hero__and">and</span>
          <span>Riyas</span>
        </h1>

        <p className="hero__invite">Invite You To Celebrate Their Wedding</p>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="eyebrow">Date</span>
            <p>Wednesday, July 15, 2026</p>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <span className="eyebrow">Venue</span>
            <p>Enayat Convention Centre</p>
          </div>
        </div>

        <div className="hero__qr">
          <img src={venueQr} alt="QR code linking to the wedding venue location" width="120" height="120" loading="lazy" />
          <span className="hero__qr-label">Scan For Location</span>
        </div>
      </div>
    </section>
  )
}
