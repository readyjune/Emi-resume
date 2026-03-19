import type { ReactNode } from 'react';

interface NavItem {
  id: string;
  title: string;
  icon: ReactNode;
}

const navItems: NavItem[] = [
  {
    id: 'hero',
    title: 'About',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 'office',
    title: 'Office Management',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: 'community',
    title: 'Community Leadership',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'diginote',
    title: 'Diginote',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  }
  
   
   
   
   
   
   
   
   
   

];

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">EW</div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.title}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.icon}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a
          href="https://www.linkedin.com/in/emerald-whiteman-58126a252/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
