import { useFadeIn } from '../hooks/useFadeIn';
import Gallery from './Gallery';

import firstImg from '../assets/diginote/first_img.png';
import diginote1 from '../assets/diginote/diginote_1.png';
import diginote2 from '../assets/diginote/diginote_2.png';

const diginoteImages = [
  { src: firstImg, alt: 'Diginote app' },
  { src: diginote1, alt: 'Diginote app screenshot 1' },
  { src: diginote2, alt: 'Diginote app screenshot 2' },
];

export default function SectionDiginote() {
  const ref = useFadeIn();

  return (
    <section id="diginote" className="section fade-in" ref={ref}>
      <div className="section-header">
        <svg viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
        <h2>Diginote</h2>
      </div>
      <p className="section-sub">iOS App</p>

      <Gallery images={diginoteImages} />

      <ul className="highlights">
        <li>Published on the Apple App Store — end-to-end product delivery</li>
        <li>Designed complete UI/UX in Figma from wireframes to final screens</li>
        <li>Collaborated closely with a developer to ship a polished product</li>
      </ul>
    </section>
  );
}
