import { Languages, Moon, ShieldCheck, Sun } from 'lucide-react';
import type { Locale } from '../data/content';

type Props = {
  dark: boolean;
  locale: Locale;
  labels: string[];
  onTheme: () => void;
  onLocale: () => void;
};

export default function TopNav({ dark, locale, labels, onTheme, onLocale }: Props) {
  const anchors = ['about', 'works', 'map', 'services', 'gallery', 'contact'];
  return (
    <header className="top-nav">
      <a className="brand" href="#home" aria-label="Yashpal Anand Suvarna home">
        <ShieldCheck size={22} />
        <span>YAS</span>
      </a>
      <nav>
        {labels.map((item, index) => (
          <a key={item} href={`#${anchors[index]}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button onClick={onLocale} aria-label="Change language" title="Change language">
          <Languages size={18} />
          <span>{locale.toUpperCase()}</span>
        </button>
        <button onClick={onTheme} aria-label="Toggle theme" title="Toggle theme">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
