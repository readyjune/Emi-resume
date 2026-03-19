import { useFadeIn } from '../hooks/useFadeIn';
import Gallery from './Gallery';

import cl1 from '../assets/community_leadership/cl_1.JPG';
import cl2 from '../assets/community_leadership/cl_2.JPG';
import cl3 from '../assets/community_leadership/cl_3.JPG';
import cl4 from '../assets/community_leadership/cl_4.JPEG';
import cl5 from '../assets/community_leadership/cl_5.WEBP';

const communityImages = [
  { src: cl1, alt: 'Community event 1' },
  { src: cl2, alt: 'Community event 2' },
  { src: cl3, alt: 'Community event 3' },
  { src: cl4, alt: 'Community event 4' },
  { src: cl5, alt: 'Community event 5' },
];

export default function SectionCommunity() {
  const ref = useFadeIn();

  return (
    <section id="community" className="section fade-in" ref={ref}>
      <div className="section-header">
        <svg viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <h2>Community Leadership</h2>
      </div>
      <p className="section-sub">WACCH - West Australia Content Creator Hub</p>

      <Gallery images={communityImages} />

      <ul className="highlights">
        <li>Built and sustained a community of 800+ active members</li>
        <li>Organise monthly meetups fostering networking and collaboration</li>
        <li>Facilitate monthly team meetings to align community goals</li>
        <li>Introduce wellness check-ins to support member wellbeing</li>
                <li>Twitch Partner — leveraging live-streaming for community visibility</li>
        <li>Secure sponsorships and partnerships to fund community initiatives</li>
      </ul>
    </section>
  );
}
