import FloralCorner from './FloralCorner'
import './OpeningScreen.css'

export default function OpeningScreen({ onOpen, closing }) {
  return (
    <div className={`opening ${closing ? 'opening--closing' : ''}`}>
      <FloralCorner position="top-left" />
      <FloralCorner position="bottom-right" />

      <div className="opening__content">
        <p className="arabic-text opening__bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

        <div className="section-divider">
          <span /><span className="divider-mark" /><span />
        </div>

        <p className="eyebrow opening__eyebrow">The Wedding Of</p>

        <h1 className="opening__names">
          Nihana <span className="opening__amp">&amp;</span> Riyas
        </h1>

        <p className="opening__date">Wednesday, the Fifteenth of July, Two Thousand Twenty-Six</p>

        <button className="btn-outline opening__button" onClick={onOpen}>
          Open Invitation
        </button>
      </div>
    </div>
  )
}
