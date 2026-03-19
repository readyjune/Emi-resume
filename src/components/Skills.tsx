import { useEffect, useRef, useState } from 'react';

interface SkillData {
  label: string;
  pct: number;
}

const skills: SkillData[] = [
  { label: 'Figma', pct: 90 },
  { label: 'Community Management', pct: 88 },
  { label: 'Business Administration', pct: 92 },
  { label: 'Xero / Accounting Tools', pct: 80 },
  { label: 'AWS Cloud (In Progress)', pct: 45 },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section fade-in" ref={ref}>
      <div className="section-header">
        <svg viewBox="0 0 24 24">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.label} className="skill-row">
            <span className="skill-label">{skill.label}</span>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: animate ? `${skill.pct}%` : '0%' }}
              />
            </div>
            <span className="skill-pct">{skill.pct}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
