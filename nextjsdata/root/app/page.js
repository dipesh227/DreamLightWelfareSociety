import HeroSection from './components/home/HeroSection'
import AboutSection from './components/about/AboutSection'
import ProgramsSection from './components/programs/ProgramsSection'
import ImpactSection from './components/home/ImpactSection'
import GetInvolvedSection from './components/home/GetInvolvedSection'
import EventsPreviewSection from './components/events/EventsPreviewSection'

export default function HomePage() {
  return (
    <>
      <HeroSection logoUrl="/logo.png" />
      <div id="main-content">
        <AboutSection id="about" />
        <ProgramsSection />
        <ImpactSection />
        <EventsPreviewSection />
        <GetInvolvedSection />
      </div>
    </>
  )
}