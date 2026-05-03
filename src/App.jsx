import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MapSection from './components/MapSection.jsx';
import Services from './components/Services.jsx';
import StickyCta from './components/StickyCta.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
