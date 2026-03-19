import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import SectionOffice from './components/SectionOffice';
import SectionCommunity from './components/SectionCommunity';
import SectionDiginote from './components/SectionDiginote';
import './App.css';

const sectionIds = ['hero', 'office', 'community', 'diginote'];

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Sidebar activeSection={activeSection} />
      <main className="main">
        <Hero />
        <hr className="divider" />
        <SectionOffice />
        <hr className="divider" />
        <SectionCommunity />
        <hr className="divider" />
        <SectionDiginote />
        <hr className="divider" />
      </main>
    </>
  );
}

export default App;
