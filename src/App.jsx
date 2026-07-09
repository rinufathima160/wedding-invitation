import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import OpeningScreen from './components/OpeningScreen'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import WeddingDetails from './components/WeddingDetails'
import PrayerSection from './components/PrayerSection'
import Venue from './components/Venue'
import Location from './components/Location'
import Closing from './components/Closing'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
  }, [opened])

  const handleOpen = () => {
    setClosing(true)
    window.setTimeout(() => setOpened(true), 1000)
  }

  return (
    <div className="app">
      {!opened && <OpeningScreen onOpen={handleOpen} closing={closing} />}

      <Navigation visible={closing} />

      <main>
        <Hero />
        <Countdown />
        <WeddingDetails />
        <PrayerSection />
        <Venue />
        <Location />
        <Closing />
      </main>

      <Footer />
    </div>
  )
}
