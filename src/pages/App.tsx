import { useState } from 'react';
import TopNav from '../components/TopNav';
import Chatbot from '../components/Chatbot';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WorksDashboard from '../sections/WorksDashboard';
import ConstituencyMap from '../sections/ConstituencyMap';
import News from '../sections/News';
import Gallery from '../sections/Gallery';
import Services from '../sections/Services';
import Achievements from '../sections/Achievements';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import { copy, type Locale } from '../data/content';
import { useTheme } from '../hooks/useTheme';

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const { dark, toggleTheme } = useTheme();
  const text = copy[locale];

  return (
    <>
      <TopNav
        dark={dark}
        locale={locale}
        labels={text.nav}
        onTheme={toggleTheme}
        onLocale={() => setLocale((value) => (value === 'en' ? 'kn' : 'en'))}
      />
      <main>
        <Hero locale={locale} message={text.heroMessage} buttons={text.buttons} />
        <About about={text.about} vision={text.vision} />
        <WorksDashboard />
        <ConstituencyMap />
        <News />
        <Gallery />
        <Services />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Chatbot placeholder={text.chatbotPlaceholder} />
    </>
  );
}
