import { useFadeIn } from '../hooks/useFadeIn';
import Gallery from './Gallery';

import om1 from '../assets/office_management/om_1.png';
import om2 from '../assets/office_management/om_2.png';
import om3 from '../assets/office_management/om_3.png';
import om4 from '../assets/office_management/om_4.png';
import om5 from '../assets/office_management/om_5.png';
import om6 from '../assets/office_management/om_6.png';

const officeImages = [
  { src: om1, alt: 'Office management 1' },
  { src: om2, alt: 'Office management 2' },
  { src: om3, alt: 'Office management 3' },
  { src: om4, alt: 'Office management 4' },
  { src: om5, alt: 'Office management 5' },
  { src: om6, alt: 'Office management 6' },
];

export default function SectionOffice() {
  const ref = useFadeIn();

  return (
    <section id="office" className="section fade-in" ref={ref}>
      <div className="section-header">
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
        <h2>Office Management</h2>
      </div>
      <p className="section-sub">Andep &amp; Barton Consultancy</p>

      <Gallery images={officeImages} />

      <ul className="highlights">
        <li>Sole administrator managing end-to-end office operations</li>
        <li>Xero accounting — invoicing, reconciliation, and financial reporting</li>
        <li>Led WIX website migration, increasing online presence</li>
        <li>Grew site traffic to 250+ monthly viewers</li>
        <li>Designed and executed targeted email marketing campaigns</li>
        <li>Manage payroll, superannuation, and compliance processes</li>
      </ul>
    </section>
  );
}
