import useReveal from '../hooks/useReveal'
import FloralCorner from './FloralCorner'
import './PrayerSection.css'

export default function PrayerSection() {
  const [ref, visible] = useReveal(0.2)

  return (
    <section className="prayer">
      <FloralCorner position="top-left" />
      <FloralCorner position="bottom-right" />

      <div ref={ref} className={`prayer__inner fade-in ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">A Prayer For Us</p>

        <p className="arabic-text prayer__arabic">
          رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
        </p>

        <p className="prayer__translation">
          "Our Lord, grant us from among our spouses and offspring comfort to
          our eyes, and make us leaders for the righteous."
        </p>
        <p className="prayer__reference">Qur'an 25:74</p>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <p className="prayer__translation">
          May Allah bless this union with love, mercy, patience and peace —
          and may our home be filled with tranquility, always.
        </p>
      </div>
    </section>
  )
}
