import { useFadeIn } from '../hooks/useFadeIn';
import profilePhoto from '../assets/profile/profile.JPG';

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section id="hero" className="hero-section fade-in" ref={ref}>
      {/* Screenshot layout: big profile photo left, text content right */}
      <div className="hero-split">
        <div className="hero-photo-side">
          <div className="hero-photo-wrapper">
            <img
              src={profilePhoto}
              alt="Emerald Whiteman"
              className="hero-photo"
            />
          </div>
          <div className="hero-name-block">
            <h1 className="hero-name">
              Emerald<br />Whiteman
            </h1>
            <p className="hero-title-label">Information Systems Student</p>
            <div className="hero-social-icons">
              <a href="https://www.linkedin.com/in/emerald-whiteman-58126a252/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-text-side">
          <h2 className="hero-heading">RESUME</h2>
          <p className="hero-stats">
            <span>10 years in business admin</span>
            <span className="hero-stats-sep">/</span>
            <span>Lead Manager of Perth's Content Creator Community</span>
          </p>
          <p className="hero-bio">
            Versatile professional with a decade of experience spanning office management,
            community leadership, and digital product development. Currently pursuing a
            Bachelor of Information Systems (Extended) at Curtin University, combining
            hands-on business awareness with emerging cloud and technology skills to drive
            meaningful impact.
          </p>

          <div className="hero-skills-preview">
            <div className="hero-skills-heading">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <h3>skills</h3>
            </div>
            <HeroSkillBar label="Project & Operations Management" pct={90} />
            <HeroSkillBar label="Community & Stakeholder Engagement" pct={85} />
            <HeroSkillBar label="Content Creation & Brand Partnerships" pct={80} />
            <HeroSkillBar label="Event Planning & Coordination" pct={75} />
            <HeroSkillBar label="Digital Tools & Technology Adoption" pct={70} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface HeroSkillBarProps {
  label: string;
  pct: number;
}

function HeroSkillBar({ label, pct }: HeroSkillBarProps) {
  return (
    <div className="hero-skill-row">
      <span className="hero-skill-label">{label}</span>
      <div className="hero-skill-bar-bg">
        <div className="hero-skill-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="hero-skill-pct">{pct}%</span>
    </div>
  );
}
